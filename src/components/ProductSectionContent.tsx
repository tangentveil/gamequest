import Image from "next/image";
import TryNow from "./TryNow";

function ProductSectionContent({
  title,
  position,
}: {
  title: string;
  position: string;
}) {
  return (
    <div
      className={`flex w-full ${
        position === "right"
          ? "justify-end"
          : position === "middle"
          ? "justify-center"
          : "justify-start"
      }`}
    >
      <div className="text-white flex flex-col w-full max-w-3xl">
        <h1 className="text-7xl" style={{ fontFamily: "var(--font-aoboshi)" }}>
          {title}
        </h1>
        <div className="bg-[#1e1e1e] flex justify-end p-1 w-md">
          <p>Release Date: 07/05/2025</p>
        </div>

        <div className="">
          <p
            className="text-lg my-6"
            style={{ fontFamily: "var(--font-prosto-one)" }}
          >
            Players assume the role of Deacon St. John, a former bounty hunter
            struggling to survive in a post-apocalyptic world filled with
            zombie-like creatures called Freaks. Though players are surrounded
            by death and danger on all sides, the world that they get to explore
            feels as though it's truly alive, which can encourage players to
            take risks when they probably shouldn't.
          </p>
        </div>

        <div className="flex items-center justify-between w-md mb-10">
          <TryNow />
        </div>
      </div>
    </div>
  );
}

export default ProductSectionContent;
