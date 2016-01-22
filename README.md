# Option payoff

Option payoff is a simple microlibrary to calculate payoffs for simple option startegies. Currently the only strategies supported are:

  - Single option
  - Straddle
  
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

var singleBuyCallPayoff = optionPayoff.single('buy|call', 'call|put', underlyingPrice, strike, premium, priceRange);
```

### Version
1.0.0

### Todos

 - Strangle
 - Spreads
 - Iron condor
 - ... more

License
----

MIT



