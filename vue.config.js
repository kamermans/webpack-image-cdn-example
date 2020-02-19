
module.exports = {
    // Use ImageEngine to serve our assets in production
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://lxrue9qg.cdn.imgeng.in/'
        : '/',

    // This config is waiting on file-loader support for [query]
    // @see https://github.com/webpack-contrib/file-loader/issues/364
    // chainWebpack: config => {
    //     config.module.rule('images')
    //         .use('url-loader')
    //         .tap(options => {
    //             // options.fallback is file-loader
    //             options.fallback.options.name += '[query]'
    //             return options
    //         })
    // },
}