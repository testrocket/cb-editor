import CoinPaprikaService from "./CoinPaprikaService";
import { find, get } from "lodash";
import { findMatches } from "../utils/matchers";

export default async function interpolate(text) {
  const coins = await CoinPaprikaService.listCoins();

  function interpolateNames(text) {
    const nameMatches = findMatches(/\{\{ Name\/(\w+) \}\}/g, text);
    for (let match of nameMatches) {
      const coin = find(coins, { symbol: match[1] });
      text = text.replace(match[0], coin.name);
    }
    return text;
  }
  
  async function interpolatePrices(text) {
    const priceMatches = findMatches(/\{\{ Price\/(\w+) \}\}/g, text);
    for (let match of priceMatches) {
      const coin = find(coins, { symbol: match[1] });
      const priceObj = await CoinPaprikaService.fetchCoinPrice(coin.id);
      const price = get(priceObj, '[0].adjusted_volume_24h_share');

      text = text.replace(match[0], `$${price}`);
    }
  
    return text;
  }

  return await interpolatePrices(interpolateNames(text));
}
