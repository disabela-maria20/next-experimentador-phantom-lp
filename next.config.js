module.exports = {
	reactStrictMode: true,
	env: {
		RECAPTCHA_SITE_KEY: "6LeEgT8cAAAAAOSqFg_s8xF6whnSAR6LjUudOiO5",
		RECAPTCHA_SECRET_KEY: "6LeEgT8cAAAAAJze_407RHduDU69tN-BCxXCXwSw",
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
