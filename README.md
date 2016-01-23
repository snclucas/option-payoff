[![Build Status](https://travis-ci.org/snclucas/option-payoff.svg?branch=master)](https://travis-ci.org/snclucas/option-payoff)

# Option payoff

Option payoff is a simple microlibrary to calculate payoffs for simple option startegies. 
  
# Installation

```js
npm install option-payoff
```
# Installation
```js
var optionPayoff = require('option-payoff');

var option1 = {side: 'buy', type: 'call', strike: 2, bid: 2, ask: 2};
var option2 = {side: 'sell', type: 'call', strike: 6, bid: 1, ask: 1};
var payoffMeta = {underlyingPrice:3,priceRange:[1,2,3,4,5]};

var payoff = optionPayoff.payoff([option1, option2], payoffMeta);

{ 
  options: [{ 
    side: 'buy', 
    type: 'call', 
    strike: 2, 
    bid: 2, 
    ask: 2 
  },
  { 
    side: 'sell', 
    type: 'call', 
    strike: 6, 
    bid: 1, 
    ask: 1 
  }],
  meta: { 
    underlyingPrice: 3, 
    priceRange: [ 1, 2, 3, 4, 5 ] 
  },
  payoff: [ 0, -1, -2, -1, 0  ] 
}


```

### Version
1.0.0

### Todos

 - Add stock strategy

License
----

MIT



