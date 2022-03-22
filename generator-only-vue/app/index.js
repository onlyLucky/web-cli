/*
 * @Author: pink
 * @Date: 2022-03-22 21:17:09
 * @LastEditors: pink
 * @LastEditTime: 2022-03-22 22:01:47
 * @Description: generator-vue
 */
const Generator = require('yeoman-generator')

// 把每一个文件都通过模版转换到目标路径
const templates = [
  'README.md',
  'package.json',
  'src/main.js',
  'src/App.vue',
  'src/components/HelloWorld.vue',
  'public/index.html'
]

module.exports = class extends Generator {
  prompting(){
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]).then(answers=>{
      this.answers = answers
    })
  }
  writing(){
    templates.map(item=>{
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(`${this.answers.name}/${item}`),
        this.answers
      )
    })
  }
}