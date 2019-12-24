module.exports = {
	presets: [
		'@babel/env',
		'@babel/react'
	],
	plugins: [
		'@babel/transform-runtime',
		['@babel/proposal-decorators', { legacy: true }]
	]
}