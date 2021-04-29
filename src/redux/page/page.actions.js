import pageActionTypes from "./page.types";

export const setCurrentPage = (pageData) => ({
  type: pageActionTypes.SET_CURRENT_PAGE,
  payload: pageData,
});

export const addMushaf = (mushafData) => ({
  type: pageActionTypes.ADD_MUSHAF,
  payload: mushafData

})

export const setCurrentMushaf = (mushafId) => ({
  type: pageActionTypes.SET_CURRENT_MUSHAF,
  payload: mushafId
})

export const deleteInstance = (mushafId) => ({
  type: pageActionTypes.DELETE_INSTANCE,
  payload: mushafId
})

export const setMushafs = (mushafData) => ({
  type: pageActionTypes.SET_MUSHAFS,
  payload: mushafData
})

export const setCurrentMushafPage = (mushafData) => ({
  type: pageActionTypes.SET_CURRENT_MUSHAF_PAGE,
  payload: mushafData
})

export const addBookmark = (boomarkData) => ({
type: pageActionTypes.ADD_BOOKMARK,
payload: boomarkData
})