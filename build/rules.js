'use strict';

const path   = require('path')
const cfg    = require('./cfg')
const { publicPath } = require('../config')('dev')

const base = [
	{
		test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
		loader: 'file-loader',
		options: resource('img')
	},
	{
		test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		loader: 'file-loader',
		options: resource('media')
	},
	{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'file-loader',
		options: resource('fonts')
	}
]

const dev    = [
	{
		test: /\.jsx?$/,
		include: [cfg.resolve('src')],
		loader: 'happypack/loader?id=happybabel',
		exclude: /node_modules/
	}
]
const server = [
	{
		test: /\.jsx?$/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [
						// 'dynamic-import-node',
						// '@loadable/babel-plugin',
						'@babel/plugin-transform-runtime',
						['@babel/plugin-proposal-decorators', { 'legacy': true }],
						// ['@babel/plugin-proposal-class-properties', { 'loose': true }]
					]
				}
			}
		],
		exclude: /node_modules/
	},
]

module.exports = {
	dev:    [ ...dev, ...base ],
	server: [ ...server, ...base ]
}

// 资源设置
function resource(type) {
	return {
		name:  cfg.assets(`${type}/[name].[hash:5].[ext]`),
		publicPath
	}
}