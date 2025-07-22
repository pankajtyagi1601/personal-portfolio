import { HERO_CONTENT } from "../constants";
import Image from "next/image";
import nextLogo from "@/public/next.svg";

const Hero: React.FC = () => {
  return (
    <section className="container z-10 mx-auto border-b border-neutral-900 px-4 pt-18 pb-12 sm:px-20 lg:pb-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center space-y-4 lg:items-start">
            <h1 className="text-center select text-6xl font-thin tracking-tight text-gray-400 lg:mt-16 lg:text-left lg:text-6xl">
              Pankaj Tyagi
            </h1>

            <span className="gradientColor select lg:text-left">
              Full Stack Developer{" "}
              <span className="gradientColor select from-orange-300 to-orange-300 ">
                {" "}
                & Programmer
              </span>
            </span>

            <p className="font-tight select my-2 max-w-xl py-4 text-center leading-relaxed tracking-tighter text-gray-400 lg:text-left">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="mt-12 w-full lg:mt-0 lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:-mt-8">
            <Image
              //   href={'https://pankajtyagi'}
              src={nextLogo}
              width={10}
              height={10}
              alt="Pankaj Tyagi - Full Stack Developer"
              className="h-auto w-2/3 rounded-lg object-cover shadow-lg sm:w-3/4"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
