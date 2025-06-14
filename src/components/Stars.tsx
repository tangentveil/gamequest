import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

// Example: Static rating value
const rating: number = 3;

const Stars = () => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) =>
        index < rating ? (
          <IoMdStar key={index} size={30} className="text-[#e58e27]" />
        ) : (
          <IoIosStarOutline key={index} size={28} className="text-[#e58e27]" />
        )
      )}
    </div>
  );
};

export default Stars;
