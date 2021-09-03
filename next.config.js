module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/paco-rabanne',
        permanent: true,
      },
    ]
  },
}
