'use strict';
var yeoman = require('yeoman-generator');

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

  install: function () {
    this.installDependencies();
  }
});
