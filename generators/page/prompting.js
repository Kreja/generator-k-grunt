'use strict';

var yosay = require('yosay');
var path = require('path');
var chalk = require('chalk');
var fs = require('fs');

module.exports = function() {
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the bee\'s knees ' + chalk.red('KGrunt') + ' generator!'
  ));

  var prompts = [];

  if (!this.pageName) {
    prompts.push({
      type: 'input',
      name: 'pageName',
      message: 'What\'s the name of your page?',
      default: process.cwd().split(path.sep).pop(),
      validate: function(input) {
        if (!input) {
          return '不能为空哦，会让人家很为难的~';
        }
        if (fs.existsSync(this.destinationPath('page/' + input))) {
          return '页面已经存在当前目录中了，换个名字吧~';
        }
        return true;
      }.bind(this)
    });
  }

  if (fs.existsSync(this.destinationPath('page/' + this.pageName))) {
    prompts.push({
      type: 'input',
      name: 'pageName',
      message: '页面已经存在当前目录中了，换个名字吧~',
      store: false,
      validate: function(input) {
        if (!input) {
          return '不能为空哦，会让人家很为难的~';
        }
        if (fs.existsSync(this.destinationPath('page/' + input))) {
          return '页面已经存在当前目录中了，换个名字吧~';
        }
        return true;
      }.bind(this)
    });
  }


  this.prompt(prompts, function (props) {
    this.props = props;
    // To access props later use this.props.someOption;
    done();
  }.bind(this));
};
