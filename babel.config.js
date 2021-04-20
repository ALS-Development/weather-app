module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          context: './src/context',
          pages: './src/pages',
          routes: './src/routes',
          services: './src/services',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
  ],
};
