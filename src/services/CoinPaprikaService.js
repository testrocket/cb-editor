export default {
  listCoins: async () => {
    return await fetch(`https://api.coinpaprika.com/v1/coins`)
      .then(resp => resp.json());
  },

  fetchCoinPrice: async coinName => {
    return await fetch(`https://api.coinpaprika.com/v1/coins/${coinName}/exchanges`)
      .then(resp => resp.json());
  }
}
