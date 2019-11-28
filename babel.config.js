module.exports = function bar(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
