import proxy from 'http-proxy-middleware'

export default function(app) {
	app.use(
		'/v1',
		proxy({
			target: 'https://pro-api.coinmarketcap.com',
			changeOrigin: true,
		})
	)
}
