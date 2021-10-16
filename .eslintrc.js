module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'standard/computed-property-even-spacing': 0,
    'no-unused-expressions': 'off'
  }
}
