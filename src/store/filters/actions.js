export const SET_AUTHORS = 'SET_AUTHORS';
export const SET_LOCATIONS = 'SET_LOCATIONS';
export const SET_QUERY_PAGE = 'SET_QUERY_PAGE';
export const SET_QUERY_AUTHOR = 'SET_QUERY_AUTHOR';
export const SET_QUERY_LOCATION = 'SET_QUERY_LOCATION';
export const TOGGLE_COLOR_THEME = 'TOGGLE_COLOR_THEME';
export const SET_TYPE_SHOW_LIST = 'SET_TYPE_SHOW_LIST';
export const SET_QUERY_LIMIT = 'SET_QUERY_LIMIT';

export const setAuthors = (array) => ({ type: SET_AUTHORS, payload: array });
export const setLocations = (array) => ({ type: SET_LOCATIONS, payload: array });
export const setQueryPage = (number) => ({ type: SET_QUERY_PAGE, payload: number });
export const setQueryAuthor = (text) => ({ type: SET_QUERY_AUTHOR, payload: text });
export const setQueryLocation = (text) => ({ type: SET_QUERY_LOCATION, payload: text });
export const setTypeShowList = (type) => ({ type: SET_TYPE_SHOW_LIST, payload: type });
export const setQueryLimit = (limit) => ({ type: SET_QUERY_LIMIT, payload: limit });
export const toggleColorTheme = () => ({ type: TOGGLE_COLOR_THEME });
