import { CHANGE_SEARCH_FIELD } from "../constants";
const initialState = {
	searchField: ""
}
// Reducer Functions
// Name is the action taking place 
// The action for which this reducer is created 
//Return a new state usign 
// 1) return Object.assign({}, state, { searchField: action.payload })
// 2) return { ...state, searchField: action.payload }


export const searchCatsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload })
		default:
			return state;

	}
}