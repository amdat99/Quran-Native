import { createSelector } from "reselect";

const selectPage = (state) => state.page;

export const selectMushafs = createSelector(
  [selectPage],
  (page) => page.mushafs? page.mushafs : []
);

export const selectCurrentMushaf = createSelector(
  [selectPage],
  (page) => page.currentMushaf ? page.currentMushaf : []
);

export const selectBookmarks = createSelector(
  [selectPage],
  (page) => page.bookmarks? page.bookmarks : []
)