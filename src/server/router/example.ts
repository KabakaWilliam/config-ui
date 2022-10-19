import { createRouter } from "./context";
import { z } from "zod";
import YahooStockAPI from "yahoo-stock-api";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getStockData", {
    input: z.object({
      stock: z.string(),
    }),
    async resolve({ input }) {
      const yahoo = new YahooStockAPI();
      const startDate = new Date("10/17/2022");
      const endDate = new Date("10/19/2022");

      const rawData = await yahoo.getHistoricalPrices({
        startDate,
        endDate,
        symbol: "AAPL",
        frequency: "1d",
      });

      const stockData = rawData as RawData;
      return stockData;
    },
  });
