import { useState } from "react";
import { trpc } from "../utils/trpc";

const StockTracker = () => {
  const [stockTicker, setStockTicker] = useState("AAPL");
  const { data, isLoading } = trpc.useQuery(
    ["example.getStockData", { stock: stockTicker }],
    {
      refetchInterval: 600000,
      refetchIntervalInBackground: true,
      cacheTime: 300000,
    }
  );

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      {isLoading ? (
        <div className="animate-pulse text-[50px] text-white">Loading ...</div>
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
          placeholder="Search for a stock ticker..."
          onChange={(e) => setStockTicker(e.target.value)}
        />
      </form>
    </div>
  );
};

export default StockTracker;