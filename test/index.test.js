var expect = require('chai').expect;
var optionPayoff = require('../src/index');

describe('option-payoff', function() {
  describe('single', function() {
    it("Single payoff should look like {strategy: 'Single',payoff:[-15.2,-15.2,-15.2,-13.2,-11.2,-9.2,-5.199999999999999,-0.1999999999999993,9.8]}", function() {
      var expected = {strategy: 'Single',payoff:[-15.2,-15.2,-15.2,-13.2,-11.2,-9.2,-5.199999999999999,-0.1999999999999993,9.8]};
      expect(optionPayoff.single('buy', 'call',51.34,35,15.2,[30,33,35,37,39,41,45,50,60])).to.eql(expected);
    });
  });
  describe('straddle', function() {
    it("Straddle payoff should look like {strategy: 'Straddle',payoff:[-25.4,-28.4,-30.4,-28.4,-26.4,-24.4,-20.4,-15.399999999999999,-5.399999999999999]}", function() {
      var expected = {strategy: 'Straddle',payoff:[-25.4,-28.4,-30.4,-28.4,-26.4,-24.4,-20.4,-15.399999999999999,-5.399999999999999]};
      expect(optionPayoff.straddle('buy', 51.34,35,15.2,[30,33,35,37,39,41,45,50,60])).to.eql(expected);
    });
  });
});
