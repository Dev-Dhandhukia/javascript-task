function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b); 
    let currentMax = 0;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (coin > currentMax + 1) {
        return currentMax + 1; 
      }
      currentMax += coin;
    }
    return currentMax + 1; 
  }
  const coins = [5, 7, 1, 1, 2, 3, 22];
  console.log(nonConstructibleChange(coins));  