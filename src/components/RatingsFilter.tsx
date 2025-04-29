import { RatingFilterProps } from "@/utils/types";
import Image from "next/image";

type RatingProps = {
  ratings: RatingFilterProps[];
};

function RatingsFilter({ ratings }: RatingProps) {
  //   console.log(ratings);
  return (
    <>
      {ratings.map((item) => {
        const { id, img } = item;

        return (
          <div key={id} className="flex gap-1">
            <Image src={img} alt="rating" />
            <span className="text-white">& Up</span>
          </div>
        );
      })}
    </>
  );
}

export default RatingsFilter;
