const path       = require('path')
const Koa        = require('koa')
const app        = new Koa()
const json       = require('koa-json')
const onerror    = require('koa-onerror')
const bodyparser = require('koa-bodyparser')

// 中间件
app.use(bodyparser({
	enableTypes:['json', 'form', 'text'],
	formLimit: '5mb',
	jsonLimit: '5mb',
	textLimit: '5mb',
}))
app.use(json())
app.use(require('koa-static')(path.resolve(__dirname, '../dist')))

require('../config.routes')(app)

app.listen(4099, function (err) {
	if (err) return console.log(err)
	console.log(`服务已启动: http://localhost:${4099}`)
})

app.on('error', (err, ctx) => {
	console.error('服务器 错误', err, ctx)
})
