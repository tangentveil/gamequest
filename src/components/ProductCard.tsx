import GreenDotWithText from "./GreenDot";
import Stars from "./Stars";

function ProductCard() {
  return (
    <div className="bg-[#fef3bc] w-[341px] h-[383px] rounded-[10px] p-4 flex flex-col justify-between">
      <div className="bg-[#3d352a] w-fit flex gap-1.5 items-center rounded-[20px] py-2 px-4">
        <GreenDotWithText />
        <p className={`text-white text-[10px]`}>1200 Online</p>
      </div>

      <div>
        <h1 className="text-3xl">World of Warcraft</h1>

        <Stars />

        <div className="text-[#ff1c1c] text-sm flex gap-2 font-medium">
          <span>10k+ Players</span>
          <span>•</span>
          <span>Action</span>
          <span>•</span>
          <span>Adventure</span>
        </div>

        <p className="font-medium">Released 10th August 2022</p>

        <div className="flex justify-between items-center mt-6">
            <span className="text-[22px] font-semibold text-[#281e1f]">$48</span>
            <button className="text-white text-lg rounded-[30px] font-semibold px-22 py-3 bg-[#e58f28]">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
