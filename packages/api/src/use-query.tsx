import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { ApiError, CancelablePromise } from './generated';

export type QueryOptions = {
  isLazy?: boolean;
}

type QueryState<R, E = ApiError> = {
  isCalled: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error?: E;
  data?: R;
  statusCode?: number;
}

export type Query<R, E = ApiError, A = any> = QueryState<R, E> & {
  fetch: (...arg: A[]) => Promise<QueryState<R, E>>;
  reset: () => void;
}

export type Fetch<A, R, E = ApiError> = Query<R, E, A>['fetch'];

export function useQuery<T, A, E extends ApiError = ApiError>(
  id: string,
  callback: (...arg: A[]) => CancelablePromise<T>,
  { isLazy = false }: QueryOptions = {},
): Query<T, E, A> {
  const [query, setQuery] = useState<QueryState<T, E>>({
    isCalled: !isLazy,
    isLoading: !isLazy,
    isError: false,
    isSuccess: false,
  });

  const fetch = useCallback(
    async (...arg: A[]): Promise<QueryState<T, E>> => {
      setQuery({
        isCalled: true,
        isLoading: true,
        isError: false,
        isSuccess: false,
      });

      try {
        const data = await callback(...arg);

        const queryData = {
          data,
          isLoading: false,
          error: undefined,
          isCalled: true,
          isError: false,
          isSuccess: true,
        };

        setQuery(queryData);
        return queryData;
      } catch (error) {
        const commonQuery = {
          isLoading: false,
          isCalled: true,
          isError: true,
          isSuccess: false,
        };

        if (error instanceof ApiError) {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const queryData: any = {
            ...commonQuery,
            statusCode: error.status,
            error,
          };

          setQuery(queryData);
          return queryData;
        }

        // eslint-disable-next-line @typescript-eslint/no-shadow
        const queryData: any = {
          ...commonQuery,
          statusCode: undefined,
          error: {
            message: 'Не известная ошибка',
            path: '',
            statusCode: 500,
            timestamp: String(Date.now()),
          },
        };

        setQuery(queryData);
        return queryData;
      }
    },
    [callback],
  );

  const reset = () => setQuery((prev) => ({
    ...prev,
    isCalled: !isLazy,
    isLoading: !isLazy,
    isError: false,
    isSuccess: false,
  }));

  useEffect(() => {
    if (isLazy) {
      return;
    }

    fetch();
  }, [id]);

  return useMemo(() => ({ ...query, fetch, reset }), [fetch, query]);
}
