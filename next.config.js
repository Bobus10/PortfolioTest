const withNextIntl = require('next-intl/plugin')(
    './src/config/i18n.ts'
);

/** @type {import('next').NextConfig} */
const config = {
    output: 'export',
    images: {
        unoptimized: true,
    },
};

module.exports = withNextIntl(config);