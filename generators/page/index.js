'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('pageName', {
      required: false,
      type: String,
      desc: 'page name'
    });
  },

  prompting: require('./prompting'),

  writing: require('./writing'),

  end: function(){
    var talkText = 'yo yo 文件已经生成好啦~~\n';
    this.log(chalk.green(talkText) + chalk.white('You are ready to go') + '\n' + chalk.green('HAPPY CODING \\(^____^)/'));
  }
});
