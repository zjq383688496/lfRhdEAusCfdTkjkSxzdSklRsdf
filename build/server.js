'use strict';

'use strict';

const webpack = require('webpack')
const base    = require('./base')
const cfg     = require('./cfg')
const rules   = require('./rules').server
const config  = require('../config')('server')
const nodeExternals        = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const Config = Object.assign({}, base, {
	entry: cfg.resolve('src/index-server.js'),
	mode: 'production',
	target: 'node',
	devtool: config.devtool,
	externals: [
		nodeExternals({
			whitelist: [ /\.(css|less)$/ ] // 忽略css，让webpack处理
		})
	],
	output: {
		path:          config.pathRoot,
		filename:      'index-server.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules
	},
	plugins: [
		new webpack.DefinePlugin({
			ENV: config.env
		}),
		new MiniCssExtractPlugin({
			filename: cfg.assets('css/[name].[hash:8].css')
		})
	]
})


module.exports = Config
