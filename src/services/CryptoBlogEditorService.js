import CoinPaprikaService from "./CoinPaprikaService";
import { find, first } from "lodash";

export default async function interpolate(text) {
  const coins = await CoinPaprikaService.listCoins();
  const coinsSymbolToName = new Map();

  function findMatches(regex, str, matches = []) {
    const res = regex.exec(str)
    res && matches.push(res) && findMatches(regex, str, matches)
    return matches
  }

  // name
  async function interpolateNames(text) {
    const nameMatches = findMatches(/\{\{ Name\/(\w+) \}\}/g, text);
    for (let match of nameMatches) {
      const coinSymbol = match[1];
      const coin = find(coins, { symbol: coinSymbol });
      text = text.replace(match[0], coin.name);

      coinsSymbolToName.set(coinSymbol, coin.id);
    }
    return text;
  }

  // price
  async function interpolatePrices(text) {
    const priceMatches = findMatches(/\{\{ Price\/(\w+) \}\}/g, text);
    for (let match of priceMatches) {
      const coinName = coinsSymbolToName.get(match[1]);
      const priceObj = await CoinPaprikaService.fetchCoinPrice(coinName);
      const price = first(priceObj).adjusted_volume_24h_share;
      text = text.replace(match[0], `$${price}`);
    }

    return text;
  }

  return await interpolatePrices(await interpolateNames(text));
}