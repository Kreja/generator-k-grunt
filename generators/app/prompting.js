'use strict';

var yosay = require('yosay');
var path = require('path');
var chalk = require('chalk');

module.exports = function() {
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the bee\'s knees ' + chalk.red('KGrunt') + ' generator!'
  ));

  var prompts = [];

  prompts.push({
    type: 'input',
    name: 'name',
    message: 'What\'s the name of your project?',
    default: process.cwd().split(path.sep).pop()
  });

  this.prompt(prompts, function (props) {
    this.props = props;
    console.log(props.name);
    done();
  }.bind(this));
};
