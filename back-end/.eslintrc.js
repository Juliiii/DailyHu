// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // add your custom rules here
  'rules': {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': 'off',
    'semi': ['error', 'always'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
