import type { FeedbackCountResponseDto } from '@common_bot/api/dist/generated';

export const getFeedbackCount = (data?: FeedbackCountResponseDto) => ({
  waiting: data?.waiting ?? 0,
  processing: data?.processing ?? 0,
  done: data?.done ?? 0,
});
