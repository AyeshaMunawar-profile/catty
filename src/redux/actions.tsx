import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED,
    REQUEST_CATS_PENDING
} from "../common/constants/constants";

export const setSearchField = (text: string) => {

    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}
//action for an asynchronous call
// middle ware redux thunk notices an action that returns a function not an object and acts upon it
export const requestCats = () => (dispatch: any) => {
    dispatch({type: REQUEST_CATS_PENDING});
    // asynchronous call
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(cats => {
            dispatch({type: REQUEST_CATS_SUCCESS, payload: cats})
        })
        .catch(error => {
            dispatch({type: REQUEST_CATS_FAILED, payload: error})
        });
}