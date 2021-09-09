import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_FAILED,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_PENDING
} from "../common/constants/constants";
type initiaStateSearchFieldType = {
     searchField: string
}
type initialStateCatsType = {
    isPending: boolean,
    cats: [],
    error: string
}
const initialStateSearchField: initiaStateSearchFieldType = {
    searchField: ""
}

const initialStateCats: initialStateCatsType = {
    isPending: false,
    cats: [],
    error: ""
}
// Reducer Functions
// Name is the action taking place 
// The action for which this reducer is created 
// Return a new state using
// 1) return Object.assign({}, state, { searchField: action.payload })
// 2) return { ...state, searchField: action.payload }

type actionType = {
    type?: string,
    payload?: any
}
export const searchCatsReducer = (state = initialStateSearchField, action: actionType | undefined = {}) => {
    switch (action?.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action?.payload})
        default:
            return state;
    }
}

export const requestCatsReducer = (state = initialStateCats, action: actionType| undefined = {}) => {
    switch (action?.type) {
        case REQUEST_CATS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_CATS_SUCCESS:
            return Object.assign({}, state, {cats: action.payload, isPending: false})
        case REQUEST_CATS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}