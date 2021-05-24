module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@Config": "./src/Config",
          "@src": "./src/",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
