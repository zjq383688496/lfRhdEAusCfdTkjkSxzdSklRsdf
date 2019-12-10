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