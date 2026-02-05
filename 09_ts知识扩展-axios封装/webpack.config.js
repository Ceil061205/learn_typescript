// 引入 path 模块，用于处理绝对路径（避免不同操作系统路径格式问题）
const path = require("path");

module.exports = {
  // 打包模式：development（开发环境，不压缩，保留源码注释）| production（生产环境，压缩优化）
  mode: "development",
  
  // 【修正/补充】打包入口（必填）：指定项目的入口文件（一般是 src/index.ts 或 src/index.js）
  entry: "./src/index.ts", // 相对路径，对应项目根目录下的 src/index.ts
  
  // 【修正/补充】模块解析规则
  resolve: {
    // 修正：配置项名是 extensions（复数），不是 extension
    // 作用：导入文件时可以省略这些后缀名，比如 import './demo' 会自动匹配 ./demo.ts 或 ./demo.js
    extensions: ['.ts', '.js'], // 优先级：ts 在前（优先解析 ts 文件）
  },
  
  // 【补充】模块处理规则：告诉 Webpack 如何解析 .ts 文件
  module: {
    rules: [
      {
        // 匹配所有 .ts 后缀的文件
        test: /\.ts$/,
        // 使用 ts-loader 解析 .ts 文件（依赖已安装的 ts-loader 和 typescript）
        use: "ts-loader",
        // 排除 node_modules 目录（第三方依赖无需解析，提升打包速度）
        exclude: /node_modules/,
      },
    ],
  },
  
  // 【修正/补充】打包输出配置（必填）
  output: {
    // 修正：输出目录（必填），使用 path.resolve 生成绝对路径
    // __dirname：Node.js 内置变量，指向当前配置文件（webpack.config.js）所在的根目录
    // 'dist'：打包后的文件输出到 项目根目录/dist 文件夹下
    path: path.resolve(__dirname, "dist"),
    
    // 补充：输出文件名（必填），指定打包后的入口文件名称
    filename: "bundle.js", // 打包后会生成 dist/bundle.js
    
    // 可选：清空 dist 目录（每次打包前删除旧的打包文件，避免冗余）
    clean: true,
  },
};