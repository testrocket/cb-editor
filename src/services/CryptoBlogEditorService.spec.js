import mockAxios from "axios";
import interpolate from "./CryptoBlogEditorService";

describe('CryptoBlogEditorService tests', () => {

  test('should interpolate name', async () => {
    mockAxios.get
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: [
            {
              "symbol": "BTC",
              "name": "Bitcoin"
            }
          ]
        })
      );

    const result = await interpolate("The first decentralized cryptocurrency, {{ Name/BTC }}");
    expect(result).toBe("The first decentralized cryptocurrency, Bitcoin");
  });

  test('should interpolate price', async () => {
    mockAxios.get
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: [
            {
              "id": "btc-bitcoin",
              "symbol": "BTC"
            }
          ]
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: [
            {
              "adjusted_volume_24h_share": 6
            }
          ]
        })
      );

    const result = await interpolate("Price is ({{ Price/BTC }})");
    expect(result).toBe("Price is ($6)");
  });
})