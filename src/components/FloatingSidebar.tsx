import { SidebarListProps } from "@/utils/types";
import Image from "next/image";

type listProps = {
  sidebarList: SidebarListProps[];
};

function FloatingSidebar({ sidebarList }: listProps) {
  return (
    <div className="flex flex-col items-center max-w-[120px] min-h-screen absolute top-0 left-0">
      <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 min-h-screen absolute top-0 left-[103px]"></div>
      <h1 className="text-[#dab785] text-4xl my-6">GQ</h1>

      <div>
        {sidebarList.map((item, index) => {
          const { id, icon, text } = item;

          return (
            <div key={id} className="flex justify-center items-center py-9">
              {index === 6 ? (
                <div className="border-b-[1px] border-b-white/30 w-[120px] mt-10"></div>
              ) : (
                <div className="flex">
                    <Image src={icon} alt={text} />
                    <span>{text}</span>
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
