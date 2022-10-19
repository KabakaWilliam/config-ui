import { trpc } from "../utils/trpc";

const Test = () => {
  const mut = trpc.useQuery(["example.getStockData", { stock: "AAPL" }], {
    refetchInterval: 600000,
    refetchIntervalInBackground: true,
    cacheTime: 300000,
  });

  //   if (mut.data) {
  //     console.log(mut.data.response.);
  //   }
  return (
    <div className="text-white">
      {mut.data && <div>{JSON.stringify(mut.data)}</div>}
    </div>
  );
};

export default Test;
