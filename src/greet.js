function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return 'Hello GitHub Actions!'
  }

  return `Hello ${name.trim()}!`
}

module.exports = { greet }
