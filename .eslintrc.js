module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/components/constants',
          _i18n: './src/components/i18n',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _services: './src/services',
          _store: './src/store',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
    },
  },
};
