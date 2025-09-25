module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ✅ use "plugins" aqui, fora de "presets"
      "nativewind/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
