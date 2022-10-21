import Fuse from "fuse.js";
import Head from "next/head";
import { SetStateAction, useState } from "react";
import { trpc } from "../utils/trpc";
import tickers from "../server/stockData/tickers.json";
const StockTracker = () => {
  const [stockTicker, setStockTicker] = useState("AAPL");
  const [searchResults, setSearchResults] = useState<StaticTickerData[]>();
  const { data, isLoading } = trpc.useQuery(
    ["example.getStockData", { stock: stockTicker }],
    {
      refetchInterval: 600000,
      refetchIntervalInBackground: true,
      cacheTime: 300000,
    }
  );

  const fuse = new Fuse<StaticTickerData>(tickers, {
    keys: ["Symbol", "Name"],
    includeScore: true,
    threshold: 0.2, //higher threshold to improve performance. 0.5 is default
  });

  const searchHandler = (e: any) => {
    e.preventDefault();
    const query = e.target.value.toUpperCase();

    const results = fuse.search(query);
    const stockResults = results.map((res) => res.item);
    setSearchResults(stockResults);

    // query API for first suggested stock item
    // to improve this, maybe add a delay
    // currently bugging out and complements value on imput bug

    // let ticker = results[0]?.item.Symbol;
    // ticker ? setStockTicker(ticker) : null;
  };

  return (
    <>
      <Head>
        <title>{stockTicker} stock</title>
        <meta
          name="description"
          content="A place to quickly track your stocks"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>"
        />
      </Head>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
        {isLoading ? (
          <div className="animate-pulse text-[50px] text-white">
            Loading ...
          </div>
        ) : (
          <div className="text-white">
            {data?.error ? (
              <div className="text-[50px]">Error 😢 </div>
            ) : (
              <div className="">
                {data?.response.map((item) => (
                  <div key={item.date}> Highest Price: {item.high} </div>
                ))}
              </div>
            )}
          </div>
        )}

        <form className="" action="">
          <input
            className="h-[100px]  w-[100vw] rounded-lg pl-2  uppercase md:w-[50vw]"
            type="search"
            //value={stockTicker} //bug: when deleting value, you are unable to add any new value
            placeholder="Search for a stock ticker..."
            onChange={(e) => searchHandler(e)}
          />
          {/* height max so that it will disappear if no search results */}
          <div className="mt-5 flex h-[200px] w-[100vw] flex-col items-center  overflow-x-scroll md:block md:max-h-[300px] md:w-[50vw] ">
            {searchResults?.map((resInfo) => (
              <SearchResWidget
                key={resInfo.Symbol}
                resultInfo={resInfo}
                setStockTicker={setStockTicker}
              />
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default StockTracker;

interface resultProps {
  resultInfo: StaticTickerData;
  setStockTicker: React.Dispatch<SetStateAction<string>>;
}

const SearchResWidget = ({ resultInfo, setStockTicker }: resultProps) => {
  const selectStock = () => {
    //when selected, query the api for this stock
    setStockTicker(resultInfo.Symbol);
  };
  return (
    <div
      onClick={selectStock}
      className="h-[100px] w-[80%] border border-black bg-[#ddd] p-3 hover:cursor-pointer hover:bg-[#a6a6a6] md:w-[100%]"
    >
      <div className="text-sm"> {resultInfo.Name}</div>
      <div className="md:p-2" />
      <div className="text-sm font-bold">{resultInfo.Symbol}</div>
    </div>
  );
};
