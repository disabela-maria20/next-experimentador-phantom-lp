module.exports = {
	reactStrictMode: true,
	env: {
		RECAPTCHA_SITE_KEY: "8d9afc50-74b0-4319-afea-d62ace698a3e",
		RECAPTCHA_SECRET_KEY: "0xDFCBDd17AAE801a69B0CCc01f0eCC2C7afDdaBA6",
		FRONTEND_API_KEY: "6SqCqv9Dkm8kNp0XKCVryKG2a2fsjztU",
	},
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
