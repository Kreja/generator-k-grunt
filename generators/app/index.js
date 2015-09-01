'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  prompting: require('./prompting'),

  writing: require('./writing'),

  install: function () {
    this.installDependencies();
  }
});
