'use strict';

module.exports = {
  app: function () {
    var pageName = this.props.pageName;
    console.log(pageName);

    // Create dir
    this.mkdir('page/' + pageName);

    // JADE files
    this.fs.copy(
      this.templatePath('index.jade'),
      this.destinationPath('page/' + pageName + '/index.jade')
    );

    // Static assets
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('page/' + pageName + '/index.js')
    );
    this.fs.copy(
      this.templatePath('index.scss'),
      this.destinationPath('page/' + pageName + '/index.scss')
    );
  },

  projectfiles: function () {
  }
}
