module.exports = {
  async redirects() {
    return [
      {
        source: '/people',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
