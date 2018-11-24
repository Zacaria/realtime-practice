const env = process.env.NODE_ENV;

module.exports = {
  apiHost: window.location.hostname + env === 'production' ? '/api' : ':3000',
};
