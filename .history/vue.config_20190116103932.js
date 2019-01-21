const path = require('path');
const utils = require('./build/utils')

const merge  =  require('webpack-merge')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const devProxy = ['/pc','/weixin','android'];  // 代理
var proEnv = require('./config/pro.env');  // 生产环境
var devEnv = require('./config/dev.env');  // 本地环境
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if(env==='production'){  // 生产环境
    target = proEnv.hosturl;
}else{  // 本地环境
    target = devEnv.hosturl;
}
console.log('target',target)
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value, index) => {
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^${value}`]: value
        }
    };
});

const resolve = dir => {
    return path.join(__dirname, dir)
}
let baseUrl = '/vue/';
module.exports = {
    chainWebpack:config=>{
        config.resolve.alias
        .set('@',resolve('src'))
        .set('_lib',resolve('src/common'))
    },
    baseUrl: baseUrl,
    pages: utils.setPages(),
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: new RegExp(baseUrl + 'page1'), to: baseUrl + 'page1.html' },
                { from: new RegExp(baseUrl + 'page2'), to: baseUrl + 'page2.html' },
            ]
        },
        open: true, // 是否自动打开浏览器页面
        host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
        port: 3030, // 端口地址
        https: false, // 使用https提供服务
        disableHostCheck: true,
        proxy: proxyObj, // string | Object
        // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
        before: app => {
          // `app` 是一个 express 实例
        }
    },
    configureWebpack: config => {
        if (env==='production') {
            return {
                plugins: [
                    new CompressionWebpackPlugin({
                         // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询
                        asset: '[path].gz[query]',
                        // 使用 gzip 压缩
                        algorithm: 'gzip', 
                        // 处理与此正则相匹配的所有文件
                        test: new RegExp(
                            '\\.(js|css)$'
                        ),
                        // 只处理大于此大小的文件
                        threshold: 10240,
                        // 最小压缩比达到 0.8 时才会被压缩
                        minRatio: 0.8,
                    })
                ]
            }
        }
    }

}