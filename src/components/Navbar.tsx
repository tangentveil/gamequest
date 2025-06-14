import Link from "next/link";
import Image from "next/image";

import SearchIcon from "@/assets/searchIcon.svg";
import BellIcon from "@/assets/bellIcon.svg";
import BagIcon from "@/assets/bagIcon.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 h-24 w-full bg-black/30 backdrop-blur-lg">
      <h1
        className="text-[#dab785] text-4xl my-6"
        style={{ fontFamily: "var(--font-pressStart)" }}
      >
        GQ
      </h1>

      <div className="flex items-center">
        <Link href={`/`} className="text-white/80">
          Home
        </Link>

        <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 h-8"></div>

        <Link href={`/products`} className="text-white/80">
          Game Store
        </Link>

        <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 h-8"></div>

        <Link href={`/leaderboard`} className="text-white/80">
          Leaderboard
        </Link>
      </div>

      <div className="flex items-center">
        <div className="flex items-center relative">
          <Image src={SearchIcon} alt="icon" className="absolute left-4" />
          <input
            type="text"
            placeholder="what are you looking for?"
            className="text-white border-2 border-white rounded-4xl px-12 py-1"
          />
        </div>

        <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 h-8"></div>


        <div className="flex items-center">
          <div className="border border-white rounded-full p-2">
            <Image src={BellIcon} alt="icon" />
          </div>

          <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 h-8"></div>

          <div className="border border-white rounded-full p-2">
            <Image src={BagIcon} alt="icon" />
          </div>

          <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 h-8"></div>

          <div className="border border-white rounded-full p-2">
            <Image src={BagIcon} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
