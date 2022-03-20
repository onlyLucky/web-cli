/*
 * @Author: pink
 * @Date: 2022-03-19 21:46:15
 * @LastEditors: pink
 * @LastEditTime: 2022-03-20 16:24:36
 * @Description: generator 核心入口，需要导出一个继承来自Yeoman Generator 的类型，在yeoman工作时会自动调用我们在此类型中定义的生命周期
 */
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting(){
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname   //appname 为项目生成文件名称
      }
    ]).then(answers=>{
      // answers => {name: 'user input name'}
      this.answers = answers
    })
  }
  writing(){
    // yeoman 自动在生成文件阶段调用此方法
    // 我们这里尝试往项目目录中写入文件
    /* this.fs.write(
      this.destinationPath('temp.txt'),
      Math.random().toString()
    ) */

    // 通过模版方式写入文件到目标目录中
    // 模版文件路径
    console.log(this.answers,'answers')
    const temp = this.templatePath('foo.txt')
    // 输出目标路径
    const output = this.destinationPath(`${this.answers.name}/foo.txt`)
    // 模版数据上下文
    const context = {
      title: 'hello generator',
      success: false
    }
    this.fs.copyTpl(temp,output,context)
    this.fs.copyTpl(
      this.templatePath('bar.html'),
      this.destinationPath(`${this.answers.name}/bar.html`)
    )
  }
}