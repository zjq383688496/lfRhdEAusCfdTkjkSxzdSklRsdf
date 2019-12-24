'use strict';

const webpack = require('webpack')
const base    = require('./base')
const cfg     = require('./cfg')
const rules   = require('./rules').dev
const config  = require('../config')('dev')


// 热更新
Object.keys(base.entry).forEach(name => {
	base.entry = [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		...base.entry[name]
	]
})

console.log('pathRoot: ', config.pathRoot)

const Config = Object.assign({}, base, {
	mode: 'development',
	module: {
		rules
	},
	devtool: config.devtool,
	output: {
		path:          config.pathRoot,
		filename:      'js/[name].[hash:8].js',
		publicPath:    config.publicPath,
		chunkFilename: 'js/[id].[hash:8].js'
	}
})

Config.plugins.push(
	new webpack.DefinePlugin({
		'ENV': config.env
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin()
)

module.exports = Config