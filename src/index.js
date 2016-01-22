module.exports = {

  single: function single(buyOrSell, callOrPut, underlyingPrice, strike, premium, priceRange) {
    return {
      strategy: 'Single',
      payoff: singleCalc(buyOrSell, callOrPut, underlyingPrice, strike, premium, priceRange),
    };
  },
  straddle: function straddle(buyOrSell, underlyingPrice, strike, premium, priceRange) {
    return {
      strategy: 'Straddle',
      payoff: straddleCalc(buyOrSell, underlyingPrice, strike, premium, priceRange),
    };
  }
};



function straddleCalc(buyOrSell, underlyingPrice, strike, premium, priceRange) {
  var payoff = [];
  
  var callOptionPayoff = singleCalc(buyOrSell, 'call', underlyingPrice, strike, premium, priceRange);
  var putOptionPayoff = singleCalc(buyOrSell, 'put', underlyingPrice, strike, premium, priceRange);
  
  for (var i = 0; i < callOptionPayoff.length; i += 1)
    payoff.push(callOptionPayoff[i] + putOptionPayoff[i]);
  return payoff;
}



function singleCalc(buyOrSell, callOrPut, underlyingPrice, strike, premium, priceRange) {
    var side = (buyOrSell.toUpperCase() === 'BUY') ? 1 : -1;
  
    var payoff = [];
  
    if (callOrPut.toUpperCase() === 'CALL')
      for (var ic in priceRange)
        payoff.push(((Math.max(priceRange[ic] - strike, 0)) - (premium)) * side);
    else
      for (var ip in priceRange)
        payoff.push(((Math.max(strike - priceRange[ip], 0)) - (premium)) * side);
    return payoff;
  }
