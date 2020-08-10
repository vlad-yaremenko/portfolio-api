const path = require('path');

module.exports = {
    devServer: {
        proxy: 'http://portfolio.api.test/'
    },
    outputDir: '../../../public/assets/app',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/assets/app/'
        : '/',
    indexPath: process.env.NODE_ENV === 'production'
        ? '../../../resources/views/app.blade.php'
        : 'index.html',
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.scss'],
            alias: {
                '@': path.join(__dirname, 'src'),
                '@variables': path.join(__dirname, 'src/styles/_variables.scss'),
                '@mixins': path.join(__dirname, 'src/styles/_mixins.scss'),
            },
        },
    },
    css: {
        loaderOptions: {
            scss: {
                data: `
          @import '~@variables';
          @import '~@mixins';
        `,
            },
        },
    },
};
