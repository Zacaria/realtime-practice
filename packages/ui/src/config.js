const env = process.env.NODE_ENV;

module.exports = {
  apiHost: window.location.hostname + env === 'production' ? ':3000' : '/api',
};
