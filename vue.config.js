const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views', resolve('src/views'))
            .set('network', resolve('src/network'))
            .set('components', resolve('src/components'))
    },

    devServer: {
        host: '127.0.0.1',
        Headers: {
            'Access-Control-Allow-Origin': '*'

        },
        disableHostCheck: true,
    },
};