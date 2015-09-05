'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-install', {
      desc: 'Skips the installation of dependencies',
      type: Boolean
    });
  },

  prompting: require('./prompting'),

  writing: require('./writing'),

  install: function () {
    if (this.options['skip-install']) {
      return;
    }
    this.installDependencies();
  }
});
