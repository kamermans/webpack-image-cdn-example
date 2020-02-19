
module.exports = {
    // Use the ImageEngine to serve our assets in production
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://cdn.stevekamerman.com/https://distracted-ritchie-1f0417.netlify.com/'
        : '/'
}