import {CHANGE_SEARCH_FIELD} from "../common/constants/constants";

export const setSearchField = (text) => {
    console.log("Text received in action is :", text);

    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}