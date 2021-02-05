module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "globals": {
    "process": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "jest",
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "warnOnUnsupportedTypeScriptVersion": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "eol-last": ["error", "always"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    "jest/consistent-test-it": [
      "error",
      {
        "fn": "it",
        "withinDescribe": "it"
      }
    ],
  }
}
