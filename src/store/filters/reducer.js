import { createStore } from 'redux';
import {
  SET_AUTHORS,
  SET_LOCATIONS,
  SET_QUERY_AUTHOR,
  SET_QUERY_LIMIT,
  SET_QUERY_LOCATION,
  SET_QUERY_PAGE,
  SET_TYPE_SHOW_LIST,
  TOGGLE_COLOR_THEME,
} from './actions';

const initialState = {
  authors: [],
  locations: [],
  typeListShow: '',
  limitPaintings: '',
  themeColor: 'black',
  request: {
    activeAuthor: '',
    activeLocation: '',
    page: 1,
  },
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload,
      };
    case SET_LOCATIONS:
      return {
        ...state,
        locations: payload,
      };
    case SET_QUERY_AUTHOR:
      return {
        ...state,
        request: {
          ...state.request,
          activeAuthor: payload,
        },
      };
    case SET_QUERY_LOCATION:
      return {
        ...state,
        request: {
          ...state.request,
          activeLocation: payload,
        },
      };
    case SET_QUERY_PAGE:
      return {
        ...state,
        request: {
          ...state.request,
          page: payload,
        },
      };
    case TOGGLE_COLOR_THEME:
      return {
        ...state,
        themeColor: state.themeColor === 'white' ? 'black' : 'white',
      };
    case SET_TYPE_SHOW_LIST:
      return {
        ...state,
        typeListShow: state.typeListShow === payload ? '' : payload,
      };
    case SET_QUERY_LIMIT:
      return {
        ...state,
        limitPaintings: payload,
      };
    default:
      return state;
  }
};
// eslint-disable-next-line no-undef,no-underscore-dangle,max-len
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
