export default {
  listCoins: () => {
    return fetch(`https://api.coinpaprika.com/v1/coins`)
      .then(resp => resp.json());
  },

  fetchCoinPrice: coinName => {
    return fetch(`https://api.coinpaprika.com/v1/coins/${coinName}/exchanges`)
      .then(resp => resp.json());
  }
}
