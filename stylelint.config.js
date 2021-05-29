module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'color-no-invalid-hex': true,
    indentation: [2, {baseIndentLevel: 1}],
    'scss/at-rule-no-unknown': true,
  },
}
