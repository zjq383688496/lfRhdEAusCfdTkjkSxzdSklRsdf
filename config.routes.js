const fs     = require('fs')
const config = require('./config')

const router = require('koa-router')()

router.prefix('/')

router.get('*', (ctx, next) => {
	let template = fs.readFileSync('./src/index.html', 'utf-8')
	ctx.body = template
})


module.exports = app => {
	// 允许跨域
	// 添加请求处理时间(ms)
	app.use(async (ctx, next) => {
		const start = Date.now()
		ctx.set('Access-Control-Allow-Credentials', true)
		ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
		ctx.set('Access-Control-Allow-Origin',  '*')
		ctx.set('Access-Control-Allow-Methods', 'GET,POST')
		ctx.set('Access-Control-Max-Age', 3600)
		if (ctx.method === 'OPTIONS') return ctx.body = ''
		ctx.cfg = config
		await next()
		const ms = Date.now() - start
		ctx.set('x-execution-time', `${ctx.method} ${ctx.url} - ${ms}ms`)
	})

	app.use(router.routes(), router.allowedMethods())
}

const render = (req, res) => {
	renderer.renderToString(req).then(({ error, html }) => {
		if (error) {
			if (error.url) {
				res.redirect(error.url)
			} else if (error.code) {
				res.status(error.code).send('error code：' + error.code)
			}
		}
		res.send(html)
	}).catch(error => {
		console.log(error)
		res.status(500).send('Internal server error')
	})
}