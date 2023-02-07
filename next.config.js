module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/pacorabanne',
				permanent: true,
			},
		]
	},
}
