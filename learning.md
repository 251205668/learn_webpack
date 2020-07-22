# webpack 4.0 学习

![20200722154349](https://raw.githubusercontent.com/imageList/imglist/master/20200722154349.png)

`webpack`简单来说就是一个模块打包工具,他可以支持不光是`ES module`模块翻译,还可以支持多种形式的模块打包。


## 安装并入门使用webpack

首先在文件夹下用`npm`初始化,然后执行命令
> 不建议全局安装webpack,可能会因为版本原因导致项目运行不起来

```bash
# webpack脚手架
$ cnpm install webpack-cli --save-dev
# webpack
$ cnpm install webpack --save
```
:::tip
可以指定`webpack`版本号进行安装脚手架

```bash
$ npm install webpack@4.43.0 webpack-cli -D
```
:::

然后找到使用到模块化主入口文件,例如我这里的`index.js`

```js
import P from './p'
new P()
```

之后执行打包命令

```bash
$ npx webpack index.js
```

打包完成之后会自动在项目根目录生成一个`dist`文件夹,里面包含`main.js`就是打包翻译后的文件。

## 模块化的概念,有哪些webpack模块

开发者将程序分解成`离散功能块`(discrete chunks of functionality)，并称之为模块。

每个模块具有比完整程序**更小的接触面**，使得`校验`、`调试`、`测试`轻而易举。 精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有`条理清楚的设计`和`明确的目的`。


`webpack模块`包含以下:

- `ES2015 import` 语句
- `CommonJS require()` 语句
- `AMD define` 和 require 语句
- `css/sass/less` 文件中的 `@import` 语句。
- 样式(`url(...)`)或 HTML 文件(`<img src=...>`)中的图片链接(image url)


## webpack配置文件和打包方式

`webpack`默认寻找的配置文件是`webpack.config.js`,如果需要更换配置文件,需要运行命令

```bash
$ npx webpack --config fileName.js
```

**基础配置**

```js
module.export = {
  // 入口文件,这里是简写，entry:{main:'./src/index.js'}
  entry:'./src/index.js',
  // 打包配置
  output:{
    filename:'bundle.js',
    // 打包文件路径 当前配置文件根目录下的dist文件夹
    path: path.resolve(__dirname,'dist')
  }
}
```
最终打包效果:

![20200722170005](https://raw.githubusercontent.com/imageList/imglist/master/20200722170005.png)

**运行`webpack`打包有几种方式**

前提条件需要安装`webpack-cli`,他的作用是识别`webpack`命令。

- 使用全局打包,前提条件是全局环境安装了`webpack-cli`

 ```bash
 $ cnpm  install webpack -g
 $ webpack index.js
 ```

- 局部打包

```bash
$ npx webapck index.js
```

- 配置`package.json`的`script`脚本进行打包


**打包输出结果分析**

![20200722170654](https://raw.githubusercontent.com/imageList/imglist/master/20200722170654.png)

- Hash: 代表本次打包的唯一hash
- Version: 本次打包的webpack版本号
- Time: 打包时间
- Asset: 打包生成文件，Size:文件大小,Chunks: 打包文件中可能是多个文件相互依赖的,其他文件打包也会把`JS文件对应的id值`放到`Chunks`下面,Chunk Names: 对应的名字。

这里的警告输出是因为没有指定模式,默认的`mode`配置是`production`,默认是压缩的。还可以设置开发环境模式(development)、
