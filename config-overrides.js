const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: { 
      "@primary-color": "#fa8c16",
      "@link-color": "#fa8c16",
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};