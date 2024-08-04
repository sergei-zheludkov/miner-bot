import { useState } from 'react';
import type { UseTextCallback } from './types';

export const DEFAULT_STATE = { comment: '', open: false };

export const useComment = () => {
  const [{ comment, open }, setComment] = useState(DEFAULT_STATE);

  const handleChangeComment: UseTextCallback = (event) => setComment({ comment: event.text, open: true });
  const handleOpenInput = () => setComment((prev) => ({ ...prev, open: true }));
  const handleCloseInput = () => setComment((prev) => ({ ...prev, open: false }));

  return {
    open,
    comment,

    handleOpenInput,
    handleCloseInput,
    handleChangeComment,
  };
};
