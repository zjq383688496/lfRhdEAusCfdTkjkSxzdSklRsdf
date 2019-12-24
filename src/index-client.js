import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { loadableReady } from '@loadable/component'
import createStore from '@store'
import Root from './App'

const createApp = Component => {
	// 获取服务端初始化的state，创建store
	const initialState = window.__INITIAL_STATE__
	const store = createStore(initialState)

	const App = () => {
		return (
			<Provider store={store}>
				<Router>
					<Component />
				</Router>
			</Provider>
		)
	}
	return <App />
}

loadableReady().then(() => {
	ReactDom.render(createApp(Root), document.getElementById('app'))
})

// 热更新
module.hot && module.hot.accept()