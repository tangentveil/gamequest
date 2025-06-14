import { SidebarListProps } from "@/utils/types";
import Image from "next/image";

type listProps = {
  sidebarList: SidebarListProps[];
  handleMouseEvent: () => void;
};

function FloatingSidebar({ sidebarList, handleMouseEvent }: listProps) {
  return (
    <div
      className="flex flex-col items-center bg-[#3d352a]/50 backdrop-blur-lg"
      onMouseLeave={handleMouseEvent}
    >
      {/* <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 min-h-screen absolute top-0 left-[103px]"></div> */}
      <h1
        className="text-[#dab785] text-2xl my-6"
        style={{ fontFamily: "var(--font-pressStart)" }}
      >
        GameQuest
      </h1>

      <div className="flex flex-col">
        {sidebarList.map((item, index) => {
          const { id, icon, text } = item;

          return (
            <div key={id} className="flex py-9">
              {index === 6 ? (
                <div className="border-b-[1px] border-b-white/30 w-[260px] mt-10"></div>
              ) : (
                <div className="flex gap-2 px-8">
                  <Image src={icon} alt={text} className="" />
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-[#dab785]">
                    {text}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FloatingSidebar;
