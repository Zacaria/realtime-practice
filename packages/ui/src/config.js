const envPath = window.NODE_ENV === 'production' ? '/api' : ':3000';

export const apiHost = window.location.hostname + envPath;
