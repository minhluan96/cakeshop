const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = withPWA({
    pwa: {
        disable: process.env.NODE_ENV !== 'production',
        dest: 'public',
        runtimeCaching,
    },
    i18n,
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
});

module.exports = nextConfig;
