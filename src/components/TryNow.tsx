import Image from "next/image";

import IosIcon from "@/assets/iosIcon.svg";
import WindowsIcon from "@/assets/windowsIcon.svg";

function TryNow() {
  return (
    <div className="flex items-center justify-between w-md mb-10">
        <div>
          <button className="bg-[#e58e27] py-4 px-12 rounded-4xl text-lg hover:text-[#e58e27] hover:bg-white transition-colors duration-300 text-semibold">
            Try For Free
          </button>
          <p className="text-[16px] font-semibold text-center">
            Buy now for $40 only
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[16px] font-semibold">Available on : </span>
          <div className="flex gap-2">
            <Image src={IosIcon} alt="ios-icon" />
            <Image src={WindowsIcon} alt="windows-icon" />
          </div>
        </div>
      </div>
  );
}

export default TryNow;
