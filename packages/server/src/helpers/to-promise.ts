import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { logger } from '../libs/logger/logger.instance';

interface WrapperParams {
  request: ReturnType<HttpService['get' | 'post']>;
  logger_message?: string;
  error_message?: string;
}

const DEFAULT_LOGGER_MESSAGE = 'HTTP request wrapper error';
const DEFAULT_ERROR_MESSAGE = 'Error with http req in User Cron';

const toPromise = async ({
  request,
  logger_message,
  error_message,
}: WrapperParams) => {
  const { data } = await firstValueFrom(request.pipe(
    catchError((error) => {
      logger.error(logger_message ?? DEFAULT_LOGGER_MESSAGE, error);
      throw new Error(error_message ?? DEFAULT_ERROR_MESSAGE);
    }),
  ));

  return data;
};

export { toPromise };
