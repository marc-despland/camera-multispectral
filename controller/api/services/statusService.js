let status = {
    name: 'Multi Spectral Camera',
    version:  require('../../package.json').version
  };
   
 module.exports = {
    getStatus() {
      return status;
    }
  };