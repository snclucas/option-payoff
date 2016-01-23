module.exports = {

  payoff: function single(options, meta) {
    return {
      options: options,
      meta: meta,
      payoff: multiOptionCalc(options, meta),
    };
  }
};

function multiOptionCalc(options, meta) {
  var payoff = [];
  var individualPayoffs = [];

  for (var i = 0; i < options.length; i += 1)
    individualPayoffs.push(singleOptionCalc(options[i], meta));

  for (var io = 0; io < meta.priceRange.length; io = io + 1) {
    var pay = 0;
    for (var ip = 0; ip < options.length; ip = ip + 1)
      pay += individualPayoffs[ip][io];
    payoff.push(pay);
  }
  return payoff;
}


function singleOptionCalc(option, meta) {
  var premium = (option.side.toUpperCase() === 'BUY') ? option.ask : option.bid;
  var side = (option.side.toUpperCase() === 'BUY') ? 1 : -1;
  var payoff = [];

  if (option.type.toUpperCase() === 'CALL')
    for (var ic in meta.priceRange)
      payoff.push(((Math.max(meta.priceRange[ic] - option.strike, 0)) - (premium)) * side);
  else
    for (var ip in meta.priceRange)
      payoff.push(((Math.max(option.strike - meta.priceRange[ip], 0)) - (premium)) * side);
  return payoff;
}