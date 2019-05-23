export default {
  fetchCurrencyName: async currencySymbol => {
    return await fetch(`https://api.coinpaprika.com/v1/coins/${currencySymbol}`)
      .then(resp => resp.json());
  },

  fetchCurrencyPrice: async currencyName => {
    return await fetch(`https://api.coinpaprika.com/v1/coins/${currencyName}/exchanges`)
      .then(resp => resp.json());
  }
}