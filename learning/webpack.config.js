const path = require('path')

module.exports = {
  mode:'development',
  entry:{
    main:"./src/index.js"
  },
  module:{
    // 定义模块规则
    rules:[
    {
      //匹配规则以jpg结尾
      test:/\.(jpg|png|gif)$/,
      // 使用到的loader
      use:{
        loader:'url-loader',
        // 额外的配置选项
        options:{
          // 配置打包后的文件名和之前一样
          name:'[name].[ext]',
          // 配置图片打包的路径
          outputPath:'images/',
          limit: 20480
        }
      }
    },
    {
      test:/\.css$/,
      use:[
        'style-loader',
        'css-loader'
      ]
    }
  ]},
  output:{
    filename:'bundle.js',
    // 打包路径,当前目录下bundle文件夹
    path:path.resolve(__dirname,'dist')
  }
}
