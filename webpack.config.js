'use strict';

const path    = require('path')
// const os      = require('os')
const webpack = require('webpack')
// const HappyPack       = require('happypack')
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const cfg = require('./cfg')

const Config = function(entry, name, target, path, isBrowser) {
	return {
		entry,
		target,
		output: {
			path,
			filename: `bundle.${name}.js`
		},
		mode: 'development',
		module: {
			rules: [
				{
					test: /\.jsx?/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				__isBrowser__: `${isBrowser}`
			})
		]
	}
}

const clientEntry  = cfg.resolve('src/index-client.js')
const clientPath   = path.resolve('dist')
const clientConfig = Config(clientEntry, 'client', 'web', clientPath, true)

const serverEntry  = cfg.resolve('src/index-server.js')
const serverPath   = path.resolve()
const serverConfig = Config(serverEntry, 'server', 'node', serverPath, false)

module.exports = [ serverConfig, clientConfig ]