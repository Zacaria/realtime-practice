const env = window.NODE_ENV;

export const apiHost = window.location.hostname + env === 'production' ? '/api' : ':3000';
