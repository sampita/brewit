module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es6": true,
  },
  extends: '@react-native-community',
  "rules": {
    "quotes": ["warn", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    "semi": ["warn", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "react/prop-types": 0,
    "react/display-name": 0,
  }
};
