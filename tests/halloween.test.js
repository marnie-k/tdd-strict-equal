const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../halloween')

describe('halloween', () =>{
  describe('strictEqual', () => {
    it('returns true when type and value are the same', () => {
      const result = strictEqual(3,3)
      expect(result).to.equal(true)
    })
    it('returns false when type is same and value is  diifferent', () => {
      const result = strictEqual(3,7)
      expect(result).to.equal(false)
    })
    it('returns true when type is different and value is same', () => {
      const result = strictEqual(3,'3')
      expect(result).to.equal(false)
    })
    it('returns true when type and value are the different', () => {
      const result = strictEqual(3,'7')
      expect(result).to.equal(false)
    })
  }) 
})