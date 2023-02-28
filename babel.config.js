module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@": "./src",
            "@shared": "./src/shared",
            "@components": "./src/components",
            "@navigators": "./src/navigators",
            "@screens": "./src/screens",
            "@icons": "./src/icons",
            "@types": "./src/types",
          },
        },
      ],
    ],
  };
};
