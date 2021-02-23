module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:nuxt/recommended',
  ],
  "rules": {
    "arrow-body-style": ["error", "as-needed"],
    "array-bracket-newline": ["error", {"multiline": true}],
    "arrow-parens": ["error", "as-needed"],
    "class-methods-use-this": "off",
    "comma-dangle": ["error", "never"],
    "import/extensions": ["error", "always", {
      "js": "never"
    }],
    "import/no-extraneous-dependencies": "off",
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "max-len": ["error", 120],
    "object-curly-newline": ["error", {
      "consistent": true,
      "minProperties": 3,
      "multiline": true
    }],
    "object-curly-spacing": ["error", "never"],
    "radix": ["error", "as-needed"],
    "space-before-function-paren": ["error", "never"],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 2,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": []
    }]
  }
}
