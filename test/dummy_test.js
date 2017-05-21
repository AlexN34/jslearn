//comment requires to work in browser
var dummy = require('../dummy.js');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
describe("Dummy", function() {
  describe("showName", function() {
    it("Michael jackson inputs should give Your name is Michael Jackson", function() {
      // expect(dummy.showName("Michael", "Jackson")).to.equal("Your name is Michael Jackson");
      assert(dummy.showName("Michael", "Jackson") === "Your name is Michael Jackson");
    });
  });
});
