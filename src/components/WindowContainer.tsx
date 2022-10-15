import GlobeIcon from "./GlobeIcon";

export const WindowContainer: React.FC<{
  topBorderHeight: string;
  windowHeight: string;
  windowWidth: string;
  children: any;
}> = (props) => {
  // const topBorderHeight = "h-[58px]";
  // const windowHeight = "h-[800px]";
  // const windowWidth = "w-[80vw]";

  const now = new Date();
  const date = now.getMonth();
  const day = now.getDate();
  const month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const time = now.toLocaleTimeString("en-US", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`relative z-10 ml-10 ${props.windowHeight} ${props.windowWidth} bg-black`}
    >
      <div className="absolute right-5 bottom-3 z-30 h-full w-full border-[4px]  border-black bg-white">
        <div
          className={`flex  w-[100%] ${props.topBorderHeight}  bg-black text-[20px] uppercase text-white`}
        >
          <div className="flex h-[100%] w-[10%] items-center justify-start  pl-2">
            WILL.OS
          </div>
          <div className="flex h-[100%] w-[60%] items-center justify-start  ">
            config 2022 *** {month[date]} {day} *** 🥵 30 degrees
          </div>
          <div className="flex h-[100%] w-[30%] text-[16px]  ">
            <div className="flex h-[100%] w-[50%] items-center justify-end pr-2 ">
              {time}(GMT+2)
            </div>
            <div className="flex h-[100%]  w-[50%] items-center justify-items-start border-l-2 pl-5">
              <GlobeIcon /> <div className="pl-5" /> DOH
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

// reference
// const PokemonListing: React.FC<{
//   pokemon: PokemonFromServer;
//   vote: () => void;
//   disabled: boolean;
// }> = (props) => {
//   return (
//     <div
//       className={`flex flex-col items-center transition-opacity ${
//         props.disabled && "opacity-0"
//       }`}
//       key={props.pokemon.id}
//     >
//       <div className="text-xl text-center capitalize mt-[-0.5rem]">
//         {props.pokemon.name}
//       </div>
//       <Image
//         src={props.pokemon.spriteUrl}
//         width={256}
//         height={256}
//         layout="fixed"
//         className="animate-fade-in"
//       />
//       <button
//         className={btn}
//         onClick={() => props.vote()}
//         disabled={props.disabled}
//       >
//         Rounder
//       </button>
//     </div>
//   );
// };
