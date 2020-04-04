
isProduction = process.env.NODE_ENV === 'production'
cdn = 'https://lxrue9qg.cdn.imgeng.in/'

module.exports = {
    // Use ImageEngine to serve our assets in production
    publicPath: isProduction ? cdn : '/',

    chainWebpack: config => {
        config.module.rule('images')
            .use('url-loader')
            .tap(options => {
                // If the default version of this project uses a version of
                // file-loader below 5.0.0, you must disable esModules.
                // You can check your version with "npm list file-loader"
                options.esModule = false,

                // options.fallback is file-loader, here we replace the default
                // with our new version that we installed with "npm install file-loader"
                options.fallback.loader = require.resolve('file-loader')

                // This adds the query string (ex: ImageEngine Directives) to the filename
                options.fallback.options.name += '[query]'

                return options
            })
    },
}
