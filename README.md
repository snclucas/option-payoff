# Option payoff

Option payoff is a simple microlibrary to calculate payoffs for simple option startegies. Currently the only strategies supported are:

  - Single option
  - Straddle
  - Strangle
  - Spread
  
# Installation

```js
npm install option-payoff
```
# Installation
```js
var optionPayoff = require('option-payoff');

var underlyingPrice = 36.23;
var underlyingPrice = 37;
var premium = 0.23;
var priceRange = [34,35,36,37,38,39,40];

var singleBuyCallPayoff = optionPayoff.single('buy', 'call', strike, premium, underlyingPrice, priceRange);
var singleSellPutPayoff = optionPayoff.single('sell', 'put',  strike, premium, underlyingPrice, priceRange);

var straddleBuyPayoff = optionPayoff.straddle('buy', strike, premium, underlyingPrice, priceRange);
var straddleSellPayoff = optionPayoff.straddle('sell', strike, premium, underlyingPrice, priceRange);

var strangleBuyPayoff = optionPayoff.straddle('buy', callstrike, putstrike, callpremium, putpremium, underlyingPrice, priceRange);
var strangleSellPayoff = optionPayoff.straddle('sell', callstrike, putstrike, callpremium, putpremium, underlyingPrice, priceRange);
```

### Version
1.0.0

### Todos

 - Iron condor
 - ... more

License
----

MIT



