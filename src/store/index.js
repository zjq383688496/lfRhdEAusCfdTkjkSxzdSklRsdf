import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

export default (initialState = {}) => {
	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(thunk),
			// (process.env.NODE_ENV !== 'server' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
		)
	)
}