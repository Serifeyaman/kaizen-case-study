module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./'],
        alias: {
          '@app/views': './src/views',
          '@app/routes': './src/routes',
          '@app/store': './src/store',
          '@app/components': './src/components',
          '@app/assets': './src/assets',
        },
      },
    ],
  ],
};
