import IosIcon from "@/assets/iosIcon.svg";
import WindowsIcon from "@/assets/windowsIcon.svg";
import Image from "next/image";

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

      <div className="flex items-center justify-between w-md">
        <div>
          <button className="bg-[#e58e27] py-4 px-12 rounded-4xl text-lg hover:text-[#e58e27] hover:bg-white transition-colors duration-300 text-semibold">
            Try For Free
          </button>
          <p className="text-[16px] font-semibold text-center">Buy now for $40 only</p>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[16px] font-semibold">Available on : </span>
          <div className="flex gap-2">
            <Image src={IosIcon} alt="ios-icon" />
            <Image src={WindowsIcon} alt="windows-icon" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-[#00ff0a] shadow-[0px_0px_4px_2px_#7cff82] rounded-full p-1"></div>
        <p>40 of your friends are playing</p>
      </div>
    </div>
  );
}

export default HeroContent;
