'use strict';

const path = require('path')

const config = {
	dev: {
		env: '"development"',
		host: '0.0.0.0',
		port: 4093,
		notifyOnErrors: true,
		devtool: 'cheap-module-eval-source-map',
	},
	server: {
		env: '"server"',
		productionSourceMap: false,
		devtool: 'source-map'
	}
}

module.exports = function(env = 'dev') {
	var curConfig = config[env]
	Object.assign(curConfig, {
		pathRoot:   path.resolve(__dirname, './dist'),
		pathStatic: 'static',
		publicPath: '/',
	})
	return curConfig
}