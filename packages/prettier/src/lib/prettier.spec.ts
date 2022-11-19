import prettierConfig = require('./prettier')

describe('prettier config', () => {
  it('should have settings for', () => {
    expect(prettierConfig).toHaveProperty('printWidth', 100)
    expect(prettierConfig).toHaveProperty('trailingComma', 'es5')
    expect(prettierConfig).toHaveProperty('tabWidth', 2)
    expect(prettierConfig).toHaveProperty('semi', false)
    expect(prettierConfig).toHaveProperty('singleQuote', true)
  })
})
