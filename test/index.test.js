var expect = require('chai').expect;
var optionPayoff = require('../src/index');

describe('option-payoff', function() {
  
  describe('single', function() {
    it("Single buy call should have payoff:[-1,-1,-1,0,1]", function() {
      var option = {side:'buy', type:'call', strike: 3, bid:1, ask:1};
      var payoffMeta = {underlyingPrice:3,priceRange:[1,2,3,4,5]};
      var expected = {payoff:[-1,-1,-1,0,1]};
      expect(optionPayoff.payoff([option], payoffMeta).payoff).to.eql(expected.payoff);
    });
    
    it("Single buy put should have payoff:[1,0,-1,-1,-1]", function() {
      var option = {side:'buy', type:'put', strike: 3, bid:1, ask:1};
      var payoffMeta = {underlyingPrice:3,priceRange:[1,2,3,4,5]};
      var expected = {payoff:[1,0,-1,-1,-1]};
      expect(optionPayoff.payoff([option], payoffMeta).payoff).to.eql(expected.payoff);
    });
    
    it("Single sell call should have payoff:[1,1,1,0,-1]", function() {
      var option = {side:'sell', type:'call', strike: 3, bid:1, ask:1};
      var payoffMeta = {underlyingPrice:3,priceRange:[1,2,3,4,5]};
      var expected = {payoff:[1,1,1,0,-1]};
      expect(optionPayoff.payoff([option], payoffMeta).payoff).to.eql(expected.payoff);
    });
    it("Single sell put should have payoff:[-1,0,1,1,1]", function() {
      var option = {side:'sell', type:'put', strike: 3, bid:1, ask:1};
      var payoffMeta = {underlyingPrice:3,priceRange:[1,2,3,4,5]};
      var expected = {payoff:[-1,0,1,1,1]};
      expect(optionPayoff.payoff([option], payoffMeta).payoff).to.eql(expected.payoff);
    });
  });
  
  describe('straddle', function() {
    it("Straddle buy payoff should have payoff:[0,-1,-2,-1,0]", function() {
      var callOption = {side: 'buy', type: 'call', strike: 3, bid: 1, ask: 1};
      var putOption = {side: 'buy', type: 'put', strike: 3, bid: 1, ask: 1};
      var meta = {underlyingPrice: 3, priceRange: [1, 2, 3, 4, 5]};
      var expected = {payoff:[0,-1,-2,-1,0]};
      expect(optionPayoff.payoff([callOption, putOption], meta).payoff).to.eql(expected.payoff);
    });
    it("Straddle sell payoff should have payoff:[0,1,2,1,0]", function() {
      var callOption = {side: 'sell', type: 'call', strike: 3, bid: 1, ask: 1};
      var putOption = {side: 'sell', type: 'put', strike: 3, bid: 1, ask: 1};
      var meta = {underlyingPrice: 3, priceRange: [1, 2, 3, 4, 5]};
      var expected = {payoff:[0,1,2,1,0]};
      expect(optionPayoff.payoff([callOption, putOption], meta).payoff).to.eql(expected.payoff);
    });
  });
  
  describe('strangle', function() {
    it("Strangle buy payoff should have payoff:[1,0,-1,-1,0,1]", function() {
      var callOption = {side: 'buy', type: 'call', strike: 3, bid: 1, ask: 1};
      var putOption = {side: 'buy', type: 'put', strike: 4, bid: 1, ask: 1};
      var meta = {underlyingPrice: 3, priceRange: [1,2,3,4,5,6]};
      var expected = {payoff:[1,0,-1,-1,0,1]};
      expect(optionPayoff.payoff([callOption, putOption], meta).payoff).to.eql(expected.payoff);
    });
    it("Strangle sell payoff should have payoff:[-1,0,1,1,0,-1]", function() {
      var callOption = {side: 'sell', type: 'call', strike: 3, bid: 1, ask: 1};
      var putOption = {side: 'sell', type: 'put', strike: 4, bid: 1, ask: 1};
      var meta = {underlyingPrice: 3, priceRange: [1,2,3,4,5,6]};
      var expected = {payoff:[-1,0,1,1,0,-1]};
      expect(optionPayoff.payoff([callOption, putOption], meta).payoff).to.eql(expected.payoff);
    });
  });
  
   describe('spread', function() {
    it("Spread buy payoff should have payoff:[-1, -1, 0, 1, 2, 3, 3, 3, 3 ]", function() {
      var option1 = {side: 'buy', type: 'call', strike: 2, bid: 2, ask: 2};
      var option2 = {side: 'sell', type: 'call', strike: 6, bid: 1, ask: 1};
      var meta = {underlyingPrice: 4, priceRange: [1,2,3,4,5,6,7,8,9]};
      var expected = {payoff:[-1, -1, 0, 1, 2, 3, 3, 3, 3 ]};
      expect(optionPayoff.payoff([option1, option2], meta).payoff).to.eql(expected.payoff);
    });
    it("Spread sell payoff should have payoff:[-3, -3, -2, -1, 0, 1, 1, 1, 1]", function() {
      var option1 = {side: 'buy', type: 'put', strike: 2, bid: 1, ask: 1};
      var option2 = {side: 'sell', type: 'put', strike: 6, bid: 2, ask: 2};
      var meta = {underlyingPrice: 4, priceRange: [1,2,3,4,5,6,7,8,9]};
      var expected = {payoff:[-3, -3, -2, -1, 0, 1, 1, 1, 1]};
      expect(optionPayoff.payoff([option1, option2], meta).payoff).to.eql(expected.payoff);
    });
  });
  
});
