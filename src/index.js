module.exports = {

  single: function single(buyOrSell, callOrPut, strike, premium, underlyingPrice, priceRange) {
    return {
      strategy: 'Single',
      type: callOrPut,
      side: buyOrSell,
      strike: strike,
      underlying_price: underlyingPrice,
      premium: premium,
      payoff: singleOptionCalc(buyOrSell, callOrPut, strike, premium, underlyingPrice, priceRange),
    };
  },
  straddle: function straddle(buyOrSell, strike, callpremium, putpremium, underlyingPrice, priceRange) {
    return {
      strategy: 'Straddle',
      side: buyOrSell,
      strike: strike,
      underlying_price: underlyingPrice,
      callpremium: callpremium,
      putpremium: putpremium,
      payoff: twoOptionCalc(buyOrSell, "call", strike, callpremium, buyOrSell, "put", strike, putpremium, underlyingPrice, priceRange),
    };
  },
  strangle: function strangle(buyOrSell, callstrike, putstrike, callpremium, putpremium, underlyingPrice, priceRange) {
    return {
      strategy: 'Strangle',
      side: buyOrSell,
      callstrike: callstrike,
      putstrike: putstrike,
      underlying_price: underlyingPrice,
      callpremium: callpremium,
      putpremium: putpremium,
      payoff: twoOptionCalc(buyOrSell, "call", callstrike, callpremium, buyOrSell, "put", putstrike, putpremium, underlyingPrice, priceRange),
    };
  },
  spread: function spread(buyOrSell1, callOrPut1, strike1, premium1, buyOrSell2, callOrPut2, strike2, premium2, underlyingPrice, priceRange) {
    return {
      strategy: 'Spread',
      buyOrSell1: buyOrSell1,
      buyOrSell2: buyOrSell2,
      callOrPut1: callOrPut1,
      callOrPut2: callOrPut2,
      strike1: strike1,
      strike2: strike2,
      underlying_price: underlyingPrice,
      premium1: premium1,
      premium2: premium2,
      payoff: twoOptionCalc(buyOrSell1, callOrPut1, strike1, premium1, buyOrSell2, callOrPut2, strike2, premium2, underlyingPrice, priceRange),
    };
  }
};




function twoOptionCalc(buyOrSell1, side1, strike1, premium1, buyOrSell2, side2, strike2, premium2, underlyingPrice, priceRange) {
  var payoff = [];
  
  var callOptionPayoff = singleOptionCalc(buyOrSell1, side1, strike1, premium1, underlyingPrice, priceRange);
  var putOptionPayoff = singleOptionCalc(buyOrSell2, side2, strike2, premium2, underlyingPrice, priceRange);
  
  for (var i = 0; i < callOptionPayoff.length; i += 1)
    payoff.push(callOptionPayoff[i] + putOptionPayoff[i]);
  return payoff;
}


function singleOptionCalc(buyOrSell, callOrPut, strike, premium, underlyingPrice, priceRange) {
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
