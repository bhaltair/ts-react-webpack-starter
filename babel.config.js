const envPreset = [
  '@babel/preset-env',
  // {
  //     // 只导入需要的 polyfill
  //     useBuiltIns: 'usage',
  //     // 指定 corjs 版本
  //     corejs: 3,
  //     // 禁用模块化方案转换
  //     modules: false,
  // },
];

module.exports = function (api) {
  api.cache(true)
  const presets = [
    // @babel/preset-env 可以让 babel 根据我们配置的 browserslist 只添加需要转换的语法和 polyfill
    envPreset,
    // 转换 tsx 成 js 代码
    "@babel/preset-typescript",
    // 集成了一些针对 react 项目的实用的插件
    "@babel/preset-react",        
  ];
  const plugins = [
    // "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    '@babel/plugin-proposal-optional-chaining',
    "@babel/plugin-syntax-dynamic-import"
  ];

  return {
    presets,
    plugins,
  };
};
