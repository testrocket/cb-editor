import axios from "axios";

export default {
  listCoins: async () => {
    const response = await axios.get(`https://api.coinpaprika.com/v1/coins`);
    return response.data;
  },

  fetchCoinPrice: async coinName => {
    const response = await axios.get(`https://api.coinpaprika.com/v1/coins/${coinName}/exchanges`);
    return response.data;
  }
}
