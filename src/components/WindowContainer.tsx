import { useEffect, useState } from "react";
import GlobeIcon from "./GlobeIcon";
import { PersonIcon } from "./SocialIcons";

export const WindowContainer: React.FC<{
  topBorderHeight: string;
  windowHeight: string;
  windowWidth: string;
  mainContainer?: boolean;
  WindowOptions?: boolean;
  children: any;
}> = (props) => {
  // const topBorderHeight = "h-[58px]";
  // const windowHeight = "h-[800px]";
  // const windowWidth = "w-[80vw]";

  const [newDate, setNewDate] = useState<Date>(new Date());

  // const now = new Date();
  // const date = now.getMonth();
  // const day = now.getDate();
  // const month = [
  //   "JAN",
  //   "FEB",
  //   "MAR",
  //   "APR",
  //   "MAY",
  //   "JUN",
  //   "JUL",
  //   "AUG",
  //   "SEP",
  //   "OCT",
  //   "NOV",
  //   "DEC",
  // ];
  // const time = now.toLocaleTimeString("en-US", {
  //   // en-US can be set to 'default' to use user's browser settings
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  const refreshClock = () => {
    setNewDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(refreshClock, 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div
      className={`relative z-10 ml-10 ${props.windowHeight} ${props.windowWidth} bg-black`}
    >
      <div className="absolute right-5 bottom-3 z-30 h-full w-full border-[4px]  border-black bg-white">
        <div
          className={`flex  w-[100%] ${props.topBorderHeight}  bg-black text-[20px] uppercase text-white`}
        >
          {/* conditions for main container widget */}
          {props.mainContainer && (
            <>
              <div className="flex h-[100%] w-[10%] items-center justify-start  pl-2">
                WILL.OS
              </div>
              <div className="flex h-[100%] w-[60%] items-center justify-start  ">
                config 2022 *** *** 🥵 30 degrees
              </div>
              <div className="flex h-[100%] w-[30%] text-[16px]  ">
                <div className="flex h-[100%] w-[50%] items-center justify-end pr-2 ">
                  {newDate.toLocaleTimeString()}(GMT+2)
                </div>
                <div className="flex h-[100%]  w-[50%] items-center justify-items-start border-l-2 pl-5">
                  <GlobeIcon /> <div className="pl-5" /> DOH
                </div>
              </div>
            </>
          )}
          {props.WindowOptions && <NavOptionsWidget />}
        </div>
        {props.children}
      </div>
    </div>
  );
};

const NavOptionsWidget = () => {
  return (
    <div className="flex h-[100%] w-[100%]">
      <div className="flex h-[100%] w-[30%] items-center  ">
        <NavButtons />
      </div>
      <div className="flex h-[100%] w-[40%] items-center justify-center">
        *** BIO.DMG ***
      </div>
      <div className="flex h-[100%] w-[30%] items-center justify-end pr-5">
        <PersonIcon />
      </div>
    </div>
  );
};

const NavButtons = () => {
  return (
    <svg
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M23 8C23 4.13401 26.134 1 30 1C33.866 1 37 4.13401 37 8C37 11.866 33.866 15 30 15C26.134 15 23 11.866 23 8Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M45 8C45 4.13401 48.134 1 52 1C55.866 1 59 4.13401 59 8C59 11.866 55.866 15 52 15C48.134 15 45 11.866 45 8Z"
        stroke="white"
        stroke-width="2"
      />
    </svg>
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
