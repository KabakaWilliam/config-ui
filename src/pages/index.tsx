import type { NextPage } from "next";
import Head from "next/head";
import GlobeIcon from "../components/GlobeIcon";
import {
  DriveIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/SocialIcons";
import { WindowContainer } from "../components/WindowContainer";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const topBorderHeight = "h-[58px]";
  const windowHeight = "h-[800px]";
  const windowWidth = "w-[80vw]";

  return (
    <>
      <Head>
        <title>Will OS</title>
        <meta name="description" content="William's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5">
        <div className="flex h-[872px] w-[98vw] items-center justify-center border-[8px] border-black bg-[url('/ref.png')] bg-cover">
          {/* main contianer */}
          <WindowContainer
            topBorderHeight={topBorderHeight}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
            mainContainer={true}
          >
            <div className="h-[734px] w-full bg-[url('/bTriangles.jpeg')] bg-cover">
              <ProfileContainer />
            </div>
            <div className="absolute top-[100px] left-[900px] underline-offset-8 hover:cursor-pointer hover:text-[#918e8e] hover:underline">
              <DriveIcon />
              <div className=" text-center font-bold uppercase text-white">
                Projects
              </div>
            </div>
          </WindowContainer>
        </div>
      </main>
    </>
  );
};

export default Home;

const SocialWidget = () => {
  return (
    <div className="flex h-[30%] w-[100%] items-center p-5">
      <div className="flex items-center pr-5 text-xl underline ">
        <LinkedinIcon />
        <div className="cursor-pointer pl-2 text-[16px] uppercase">
          @WilliamGitta
        </div>
      </div>
      <div className="flex items-center pr-5 text-xl underline ">
        <TwitterIcon />
        <div className="cursor-pointer pl-2 text-[16px] uppercase">
          @William
        </div>
      </div>
      <div className="flex items-center pr-5 text-xl underline ">
        <GitHubIcon />
        <div className="cursor-pointer pl-2 text-[16px] uppercase">
          @KabakaWilliam
        </div>
      </div>
    </div>
  );
};

const ProfileContainer = () => {
  return (
    <div className="absolute top-[100px]">
      <WindowContainer
        topBorderHeight="h-[30px]"
        windowHeight="h-[400px]"
        windowWidth="w-[700px]"
        WindowOptions={true}
      >
        <div className="graphPaper h-[362px] w-full">
          <div className="flex h-[70%] w-[100%] border-2 border-b-black bg-white">
            <div className="flex h-[90%] w-[30%] items-center justify-center">
              <div className="flex h-[180px] w-[180px] items-center justify-center border-[10px] border-blue-600">
                <div className="flex h-[160px] w-[160px] items-center justify-center border-[10px] border-white">
                  <img
                    src="https://cartoonessays.files.wordpress.com/2018/12/4797003-hueyfreeman.png?w=660"
                    alt=""
                    className="object- h-[140px] w-[150px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex h-[90%] w-[70%] flex-col items-center justify-center">
              {/* user intro widget */}
              <div className="h-[180px] w-[100%] select-none ">
                <div className="font-sans text-[40px] font-bold">
                  William Gitta
                  <span className="font-mono text-lg font-thin">HE/HIM</span>
                </div>
                <div className="pb-2 font-sans font-semibold">
                  Full Stack Developer. Data Researcher. Writer
                </div>
                <div className="font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, aut beatae? Modi, culpa error repellendus doloribus
                  natus eos suscipit deleniti
                </div>
              </div>
            </div>
          </div>
          {/* socials under here */}
          <SocialWidget />
        </div>
      </WindowContainer>
    </div>
  );
};
