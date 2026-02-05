// 全局的变量 函数 类等
declare const why: string
declare function xyz(params: string): any

declare module "xxx" {
 
}

// 声明文件 
declare module "*.png"
declare module "*.vue"


// 你理解得有一部分是对的，declare 关键字核心不是「创建 / 定义」内容，而是「告诉 TypeScript 编译器：某个变量、函数、模块、类型等已经在其他地方（比如非 TS 代码、全局环境、外部脚本）存在了，你不用报错，直接信任它的类型即可」，全局声明只是它的常见用途之一，不是全部用途。
// 先给核心结论：declare 用于「类型声明」（仅提供类型信息），不生成任何 JavaScript 代码，目的是解决 TS 对「外部已有内容」的类型识别问题，全局声明是它的使用场景之一。

