/*
 * @Author: pink
 * @Date: 2022-03-19 21:46:15
 * @LastEditors: pink
 * @LastEditTime: 2022-03-19 22:07:21
 * @Description: generator 核心入口，需要导出一个继承来自Yeoman Generator 的类型，在yeoman工作时会自动调用我们在此类型中定义的生命周期
 */
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  writing(){
    // yeoman 自动在生成文件阶段调用此方法
    // 我们这里尝试往项目目录中写入文件
    this.fs.write(
      this.destinationPath('temp.txt'),
      Math.random().toString()
    )
  }
}