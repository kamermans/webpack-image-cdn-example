isProduction = process.env.NODE_ENV === 'production'
cdn = 'https://lxrue9qg.cdn.imgeng.in/'

module.exports = {
    // Use ImageEngine to serve our assets in production
    publicPath: isProduction ? cdn : '/',

    // This config requires file-loader v5.1.0+
    // @see https://github.com/webpack-contrib/file-loader/issues/364
    chainWebpack: config => {
        if (isProduction) {
            config.module.rule('images')
                .use('url-loader')
                .tap(options => {
                    // options.fallback is file-loader
                    options.fallback.loader = require.resolve('file-loader')
                    options.fallback.options.name += '[query]'
                    return options
                })
        }
    },

}