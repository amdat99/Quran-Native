export const setCurrentPage = (mushafs, mushafData) => {
  const existingPage = mushafs.find(
    (mushaf) => mushaf.id === mushafData.id
  );
  if (existingPage) {
    return mushafs.map((mushaf) =>
      mushaf.id ===  mushafData.id
        ? {id: mushafData.id, title: mushafData.title, page: mushafData.page }
        : {...mushaf}
    );
  }
  return [...mushafs, { ...mushafData}];
};

export const addMushaf = (currentMushafs, mushafToAdd) => {

  return [...currentMushafs, { ...mushafToAdd}];
};

export const addBookmark = (currentBookmarks, bookmarkToAdd) => {
  return [...currentBookmarks, { ...bookmarkToAdd}];
}
export const setCurrentMushaf = (mushafs, id) => {

  const currentMushaf = mushafs.find(
    (mushaf) => mushaf.id === id
  );

  return [currentMushaf];

}