function primeFactors(n) {
  let factors = []
  for (divisor = 2; n > 1; divisor++) {
    for (; n % divisor === 0; n /= divisor) {
      factors.push(divisor)
    }
  }
  return factors
}

module.exports = primeFactors
