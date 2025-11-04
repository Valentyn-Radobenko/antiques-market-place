import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, DiscussionData } from '../../types/discussionTypes';
import { discussions } from '../../data/discussions';

export const initialState: DiscussionData[] = discussions;

const discussionsSlice = createSlice({
  name: 'discussions',
  initialState,
  reducers: {
    updateDiscussions: (state, action: PayloadAction<DiscussionData>) => {
      state.push(action.payload);
    },
    deleteDiscussion: (state, action: PayloadAction<string>) => {
      return state.filter((discussion) => discussion.id !== action.payload);
    },
    endDiscussion: (state, action: PayloadAction<string>) => {
      return state.map((discussion) =>
        discussion.id === action.payload ?
          { ...discussion, status: 'ended' }
        : discussion,
      );
    },
    addNewComment: (
      state,
      action: PayloadAction<{ id: string; comment: Comment }>,
    ) => {
      const { id, comment } = action.payload;
      const discussion = state.find((d) => d.id === id);

      if (discussion) {
        discussion.comments.push(comment);
      }
    },
    editComment: (
      state,
      action: PayloadAction<{
        id: string;
        newComment: string;
        commentId: string;
      }>,
    ) => {
      const { id, newComment, commentId } = action.payload;
      const currentComent = state
        .find((d) => d.id === id)
        ?.comments.find((c) => c.id === commentId);

      if (currentComent) {
        currentComent.text = newComment;
      }
    },

    deleteOneComment: (
      state,
      action: PayloadAction<{ id: string; commentId: string }>,
    ) => {
      const { id, commentId } = action.payload;
      const discussion = state.find((d) => d.id === id);

      if (discussion) {
        discussion.comments = discussion.comments.filter(
          (c) => c.id !== commentId,
        );
      }
    },
  },
});

export const {
  updateDiscussions,
  deleteDiscussion,
  endDiscussion,
  addNewComment,
  editComment,
  deleteOneComment,
} = discussionsSlice.actions;
export default discussionsSlice.reducer;
