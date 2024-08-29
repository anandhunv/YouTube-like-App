const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://suggestqueries.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix when requesting
      },
    })
  );
};
