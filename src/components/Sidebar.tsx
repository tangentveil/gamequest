import Image from "next/image";

import HomeIcon from "@/assets/homeIconSidebar.svg";
import MailIcon from "@/assets/mailIconSidebar.svg";
import StoreIcon from "@/assets/storeIconSidebar.svg";
import WalletIcon from "@/assets/walletIconSidebar.svg";
import MenuIcon from "@/assets/menuIconSidebar.svg";
import TrophyIcon from "@/assets/trophyIconSidebar.svg";
import SettingIcon from "@/assets/settingIconSidebar.svg";
import LogoutIcon from "@/assets/logoutIconSidebar.svg";
import { useState } from "react";
import FloatingSidebar from "./FloatingSidebar";
import { SidebarListProps } from "@/utils/types";

function Sidebar() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const sidebarList: SidebarListProps[] = [
    {
      id: "1",
      icon: HomeIcon,
      text: "Home",
    },
    {
      id: "2",
      icon: MailIcon,
      text: "Mail",
    },
    {
      id: "3",
      icon: StoreIcon,
      text: "Store",
    },
    {
      id: "4",
      icon: WalletIcon,
      text: "Store",
    },
    {
      id: "5",
      icon: MenuIcon,
      text: "Store",
    },
    {
      id: "6",
      icon: TrophyIcon,
      text: "Store",
    },
    {
      id: "7",
      icon: null,
      text: "",
    },
    {
      id: "8",
      icon: SettingIcon,
      text: "Store",
    },
    {
      id: "9",
      icon: LogoutIcon,
      text: "Store",
    },
  ];

  const handleMouseEvent = () => {
    console.log("Hovered");
    setIsHovered(true);
  };

  return (
    <div className="flex flex-col items-center max-w-[120px] min-h-screen">
      <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 min-h-screen absolute top-0 left-[103px]"></div>
      <h1 className="text-[#dab785] text-4xl my-6">GQ</h1>

      {isHovered && <FloatingSidebar sidebarList={sidebarList} />}

      <div onMouseEnter={handleMouseEvent}>
        {sidebarList.map((item, index) => {
          const { id, icon, text } = item;

          return (
            <div key={id} className="flex justify-center items-center py-9">
              {index === 6 ? (
                <div className="border-b-[1px] border-b-white/30 w-[120px] mt-10"></div>
              ) : (
                <Image src={icon} alt={text} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
