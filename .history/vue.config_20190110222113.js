// var path = require('path');

// const devProxy = ['/pc','/weixin','android'];  // 代理
// var proEnv = require('./config/pro.env');  // 生产环境
// var devEnv = require('./config/dev.env');  // 本地环境
// const env = process.env.NODE_ENV;
// let target = '';
// // 默认是本地环境
// if(env==='production'){  // 生产环境
//     target = proEnv.hosturl;
// }else{  // 本地环境
//     target = devEnv.hosturl;
// }
// console.log('target',target)
// // 生成代理配置对象
// let proxyObj = {};
// devProxy.forEach((value, index) => {
//     proxyObj[value] = {
//         target: target,
//         changeOrigin: true,
//         pathRewrite: {
//             [`^${value}`]: value
//         }
//     };
// });

module.exports = {
 
    devServer: {
        open: true, // 是否自动打开浏览器页面
        host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
        port: 3030, // 端口地址
        https: false, // 使用https提供服务
        // disableHostCheck: true,
        // proxy: proxyObj, // string | Object
        
        // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
        before: app => {
          // `app` 是一个 express 实例
        }
    }

}