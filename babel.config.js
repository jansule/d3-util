module.exports = {
  'presets': [
    '@babel/env'
  ],
  'plugins': [
    '@babel/plugin-proposal-function-bind',
    ['@babel/plugin-proposal-class-properties', { 'loose': false }],
  ]
};
