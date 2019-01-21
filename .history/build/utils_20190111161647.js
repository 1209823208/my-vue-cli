const path = require('path')
const glob = require('glob')
const PAGE_PATH = path.resolve(__dirname,'../src/pages')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 多入口配置
// 通过glob模块读取page文件夹下所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口文件
exports.getEntries = ()=>{
    let entryFiles = glob.sync(PAGE_PATH+'/*/*.js')
    let map = {}
    entryFiles.forEach(filePath=>{
        let filename = filePath.substring(filePath.lastIndexOf('\/'),filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map
}
// 多页面输出配置
// 与上面的多页面入口配置相同，读取page文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = configs=>{
    let entryHtml = glob.sync(PAGE_PATH+'./*/*.html')
    let arr = []
    entryHtml.forEach(filePath=>{
        let filename = filePath.substring(filePath.lastIndexOf('\/'),filePath.lastIndexOf('.'))
        let conf = {
            multihtmlCache:true,
            template:filePath,
            filename:filename+'.html',
            //页面模板需要对应的js脚本，如果不加这行每个页面都会引入所有的js脚本
            chunks:['mainfest','vendor',filename],
            inject:false
        }
        if(configs){
            conf = merge(conf,configs)
        }
        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                minify: {
                    removeComments: true, // 删除html中的注释代码
                    collapseWhitespace: true, // 删除html中的空白符
                },
                chunksSortMode: 'manual'// 按manual的顺序引入
            })
        }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr; 
}
// pages多入口配置
exports.setPages = configs=>{
    let entryFiles = glob.sync(PAGE_PATH+'/*/*.js');
    let map = {};
    entryFiles.forEach(filePath=>{
        let filename = filePath.substring(filePath.lastIndexOf('\/'),filePath.lastIndexOf('.'))
        let tmp = filePath.substring(0,filePath.lastIndexOf('.'));

        let conf = {
            // page 的入口
            entry: filePath, 
            // 模板来源
            template: tmp + '.html', 
            // 在 dist/index.html 的输出
            filename: filename + '.html', 
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['manifest', 'vendor', filename], 
            inject: true,
        };

        if (configs) {
            conf = merge(conf, configs)
        }

        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                minify: {
                    removeComments: true, // 删除html中的注释代码
                    collapseWhitespace: true, // 删除html中的空白符
                },
                chunksSortMode: 'manual'// 按manual的顺序引入
            })
        }

        map[filename] = conf;
    })
    return map
}