import pageActionTypes from "./page.types";
import { setCurrentPage, addMushaf, setCurrentMushaf, addBookmark} from "./page.utils";

const INITIAL_STATE = {

  mushafs: [],
  currentMushaf: [],
  bookmarks : [],
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pageActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        mushafs: setCurrentPage(state.mushafs, action.payload),
      };

      case pageActionTypes.ADD_MUSHAF:
        return {
          ...state,
          mushafs: addMushaf(state.mushafs, action.payload)
        }
        case pageActionTypes.SET_CURRENT_MUSHAF:
          return {
          ...state,
          currentMushaf: setCurrentMushaf(state.mushafs,action.payload),
          }
          case pageActionTypes.SET_MUSHAFS:
            return {
              ...state,
              mushafs: action.payload
            }
          case pageActionTypes.SET_CURRENT_MUSHAF_PAGE:
            return {
              ...state,
              currentMushaf: action.payload
            }

          case pageActionTypes.ADD_BOOKMARK:
            return {
              ...state,
              bookmarks: addBookmark(state.bookmarks, action.payload)
            }
            

    default:
      return state;
  }
};

export default pageReducer;
