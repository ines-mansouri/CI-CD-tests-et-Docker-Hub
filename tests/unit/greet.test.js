const { greet } = require('../../src/greet')

describe('greet() - tests unitaires', () => {
  test('renvoie "Hello GitHub Actions!" sans paramètre', () => {
    expect(greet()).toBe('Hello GitHub Actions!')
  })

  test('salue la personne passée en paramètre', () => {
    expect(greet('Wassim')).toBe('Hello Wassim!')
  })

  test('supprime les espaces autour du nom', () => {
    expect(greet(' Ali ')).toBe('Hello Ali!')
  })
})
