module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 16,
            propList: ['*'],
            minPixelValue: 2
        })
    ]
}