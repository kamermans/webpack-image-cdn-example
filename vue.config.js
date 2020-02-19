
module.exports = {
    // Use the ImageEngine to serve our assets in production
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://lxrue9qg.cdn.imgeng.in/'
        : '/'
}