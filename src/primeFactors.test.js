const primeFactors = require('./primeFactors');

describe("primeFactors", () => {
  it("should return [] if given 1", () => {
    expect(primeFactors(1)).toEqual([])
  })
})
