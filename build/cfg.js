'use strict';

const path = require('path')
// const config = require('../config')('dev')

Object.assign(exports, {

	// 项目绝对根目录
	resolve: function(dir = '') {
		return path.resolve(__dirname, '../', dir)
	},

	// 静态资源目录
	// assets: function(dir) {
	// 	const pathStatic = config.pathStatic
	// 	return path.posix.resolve(pathStatic, dir)
	// }

})
