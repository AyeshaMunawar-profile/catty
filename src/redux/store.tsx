import {Provider} from "react-redux";
import "tachyons";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchCatsReducer, requestCatsReducer } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchCatsReducer, requestCatsReducer});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch