import { Provider } from "react-redux"
import "tachyons";
import App from "./App"
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchCatsReducer, requestCatsReducer } from '../../redux/reducers';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

const getStore = () => {
	const logger = createLogger();
	const rootReducer = combineReducers({ searchCatsReducer, requestCatsReducer });
	const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
	return store;
}
describe("Test main suite 1: Main App component is working correctly", () => {
	describe("Test sub suite 1.1: Static text is displayed correctly", () => {
		test("Test case 1.1.1: Header text is displayed correctly", () => {
			// Step1: Arrange
			render(<Provider store={getStore()}><App /></Provider>)
			// Step2: Act
			// Stepp3: Assert
			const textElement = screen.getByText("Catty", { exact: false });
			expect(textElement).toBeInTheDocument();
		})
	})
})