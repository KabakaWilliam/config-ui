// Generated by https://quicktype.io

declare global {
  interface StockResponse {
    rawData: RawData;
  }

  interface RawData {
    error: boolean;
    currency: string;
    response: Response[];
  }

  interface Response {
    date: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjclose: number;
  }
}
export {};
