var expect = require('chai').expect;
var optionPayoff = require('../src/index');

describe('option-payoff', function() {
  
  describe('single', function() {
    it("Single buy call should have payoff:[-1,-1,-1,0,1]", function() {
      var expected = {payoff:[-1,-1,-1,0,1]};
      expect(optionPayoff.single('buy', 'call',3,1,3,[1,2,3,4,5]).payoff).to.eql(expected.payoff);
    });
    it("Single buy put should have payoff:[1,0,-1,-1,-1]", function() {
      var expected = {payoff:[1,0,-1,-1,-1]};
      expect(optionPayoff.single('buy', 'put',3,1,3,[1,2,3,4,5]).payoff).to.eql(expected.payoff);
    });
    
    it("Single sell call should have payoff:[1,1,1,0,-1]", function() {
      var expected = {payoff:[1,1,1,-0,-1]};
      expect(optionPayoff.single('sell', 'call',3,1,3,[1,2,3,4,5]).payoff).to.eql(expected.payoff);
    });
    it("Single sell put should have payoff:[-1,0,1,1,1]", function() {
      var expected = {payoff:[-1,-0,1,1,1]};
      expect(optionPayoff.single('sell', 'put',3,1,3,[1,2,3,4,5]).payoff).to.eql(expected.payoff);
    });
  });
  
  describe('straddle', function() {
    it("Straddle buy payoff should have payoff:[0,-1,-2,-1,0]", function() {
      var expected = {payoff:[0,-1,-2,-1,0]};
      expect(optionPayoff.straddle('buy', 3,1,1,3,[1,2,3,4,5]).payoff).to.eql(expected.payoff);
    });
    it("Straddle sell payoff should have payoff:[0,1,2,1,0]", function() {
      var expected = {payoff:[0,1,2,1,0]};
      expect(optionPayoff.straddle('sell', 3,1,1,3,[1,2,3,4,5]).payoff).to.eql(expected.payoff);
    });
  });
  
  describe('strangle', function() {
    it("Strangle buy payoff should have payoff:[1,0,-1,-1,0,1]", function() {
      var expected = {payoff:[1,0,-1,-1,0,1]};
      expect(optionPayoff.strangle('buy', 3,4,1,1,3,[1,2,3,4,5,6]).payoff).to.eql(expected.payoff);
    });
    it("Strangle sell payoff should have payoff:[-1,0,1,1,0,-1]", function() {
      var expected = {payoff:[-1,0,1,1,0,-1]};
      expect(optionPayoff.strangle('sell', 3,4,1,1,3,[1,2,3,4,5,6]).payoff).to.eql(expected.payoff);
    });
  });
  // spread(buyOrSell1, side1, strike1, premium1, buyOrSell2, side2, strike2, premium2, underlyingPrice, priceRange) 
  
   describe('spread', function() {
    it("Spread buy payoff should have payoff:[-2,-2,-1,0,1,2,2,2,2]", function() {
      var expected = {payoff:[-2,-2,-1,0,1,2,2,2,2]};
      expect(optionPayoff.spread('buy', 'call', 2,1,'sell','call',6,-1,4,[1,2,3,4,5,6,7,8,9]).payoff).to.eql(expected.payoff);
    });
    it("Spread sell payoff should have payoff:[-6,-6,-6,-5,-4,-3,-2,-2,-2]", function() {
      var expected = {payoff:[-6,-6,-6,-5,-4,-3,-2,-2,-2]};
      expect(optionPayoff.spread('buy', 'put', 3,1,'sell','put',7,-1,5,[1,2,3,4,5,6,7,8,9]).payoff).to.eql(expected.payoff);
    });
  });
  
});
