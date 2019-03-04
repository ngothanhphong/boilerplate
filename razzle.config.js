'use strict';
const path = require('path');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, config)
    appConfig.resolve.alias = {
      ...appConfig.resolve.alias,
      components: path.join(__dirname, "src", "components")
    }

    return appConfig;
  },
  plugins: ['typescript'],
};
