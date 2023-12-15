const withNextIntl = require('next-intl/plugin')(
    './src/config/i18n.ts'
);
 
module.exports = withNextIntl({
    output: 'export',
    images: {
        unoptimized: true,
    },
});