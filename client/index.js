const createApp = Component => {
	// 获取服务端初始化的state，创建store
	const initialState = window.__INITIAL_STATE__
	const store = createStore(initialState)

	const App = () => {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Component />
				</BrowserRouter>
			</Provider>
		)
	}
	return <App />
}

ReactDOM.hydrate(createApp(Root), document.getElementById('app'))