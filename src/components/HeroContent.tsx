import Image from "next/image";
import GreenDotWithText from "./GreenDot";
import TryNow from "./TryNow";

function HeroContent() {
  return (
    <div className="text-white p-10">
      <h1
        className="text-7xl animate-fade"
        style={{ fontFamily: "var(--font-wallpoet)" }}
      >
        Days Gone
      </h1>
      <div className="bg-[#1e1e1e] w-md flex justify-end p-1">
        <p>Release Date: 07/05/2025</p>
      </div>

      <p
        className="text-lg my-6 w-1/2 animate-slide-right"
        style={{ fontFamily: "var(--font-prosto-one)" }}
      >
        Players assume the role of Deacon St. John, a former bounty hunter
        struggling to survive in a post-apocalyptic world filled with
        zombie-like creatures called Freaks. Though players are surrounded by
        death and danger on all sides, the world that they get to explore feels
        as though it's truly alive, which can encourage players to take risks
        when they probably shouldn't.
      </p>

      <TryNow />

      <div className="flex items-center gap-2">
        <GreenDotWithText />
        <p className={`text-white text-[18px]`}>
          40 of your friends are playing
        </p>
      </div>

      <div className="flex w-full items-center justify-center mt-10 gap-5">
        <div className="p-1 bg-[#dab785] rounded-full"></div>
        <div className="p-1 bg-white/80 rounded-full"></div>
        <div className="p-1 bg-white/80 rounded-full"></div>
      </div>
    </div>
  );
}

export default HeroContent;
