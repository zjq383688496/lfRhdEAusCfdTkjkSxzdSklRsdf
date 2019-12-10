'use strict';

const path = require('path')
const Env  = process.env.NODE_ENV || 'dev'

const config = {
	dev: {
		env: 'development',
		host: '0.0.0.0',
		port: 4093,
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,
		proxyTable: {},
		useEslint: false,
		showEslintErrorsInOverlay: false,
		devtool: 'cheap-module-eval-source-map',
		cacheBusting: true,
		cssSourceMap: true
	},
	qa: {
		env: 'qa',
		productionSourceMap: true,
		devtool: 'cheap-module-eval-source-map'
	},
	prod: {
		env: 'production',
		productionSourceMap: false,
		devtool: false,
	},
	server: {
		env: 'server',
		productionSourceMap: false,
		devtool: 'source-map'
	}
}

const curConfig = config[Env]

Object.assign(curConfig, {
	assetsRoot: path.resolve(__dirname, '../dist'),
	assetsSubDirectory: 'static',
	assetsPublicPath: '/',
})

module.exports = {

}