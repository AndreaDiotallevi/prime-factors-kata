const primeFactors = require('./primeFactors');

describe("primeFactors", () => {
  it("should return [] if given 1", () => {
    expect(primeFactors(1)).toEqual([])
  })

  it("should return [2] if given 2", () => {
    expect(primeFactors(2)).toEqual([2])
  })

  it("should return [3] if given 3", () => {
    expect(primeFactors(3)).toEqual([3])
  })
})
