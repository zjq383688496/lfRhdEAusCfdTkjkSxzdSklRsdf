import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import { router } from './routes'
import Root from './App'

const createApp = (context, url, store) => {
	const App = () => {
		return (
			<Provider store={store}>
				<StaticRouter context={context} location={url}>
					<Root />
				</StaticRouter>
			</Provider>
		)
	}
	return <App />
}

export {
	createApp,
	createStore,
	router
}