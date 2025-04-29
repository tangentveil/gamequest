"use client";

import { FilterProps, RatingFilterProps } from "@/utils/types";
import SingleFilter from "./SingleFilter";
import PriceFilter from "./PriceFilter";
import FourStars from "@/assets/fourStars.svg";
import ThreeStars from "@/assets/threeStars.svg";
import TwoStars from "@/assets/twoStars.svg";
import OneStar from "@/assets/oneStar.svg";
import RatingsFilter from "./RatingsFilter";
import { useState } from "react";

function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const categories: FilterProps[] = [
    { id: "1", text: "Indy" },
    { id: "2", text: "Adventure" },
    { id: "3", text: "MMO" },
    { id: "4", text: "Action" },
    { id: "5", text: "Strategy" },
    { id: "6", text: "Simulator" },
    { id: "7", text: "Sports" },
  ];

  const platforms: FilterProps[] = [
    { id: "11", text: "PC" },
    { id: "21", text: "PlayStation 5" },
    { id: "31", text: "PlayStation 4" },
    { id: "41", text: "Xbox Series" },
    { id: "51", text: "Nintendo Switch" },
  ];

  const types: FilterProps[] = [
    { id: "15", text: "Paid" },
    { id: "25", text: "Free" },
  ];

  const ratings: RatingFilterProps[] = [
    {
      id: "16",
      img: FourStars,
      rating: 4,
    },
    {
      id: "26",
      img: ThreeStars,
      rating: 3,
    },
    {
      id: "36",
      img: TwoStars,
      rating: 2,
    },
    {
      id: "46",
      img: OneStar,
      rating: 1,
    },
  ];

  const handleCategoryChange = (id: string) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handlePlatformChange = (id: string) => {
    if (selectedPlatforms.includes(id)) {
      setSelectedPlatforms(
        selectedPlatforms.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedPlatforms([...selectedPlatforms, id]);
    }
  };

  const handleTypeChange = (id: string) => {
    if (selectedTypes.includes(id)) {
      setSelectedTypes(selectedTypes.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedTypes([...selectedTypes, id]);
    }
  };

  const handleSubmit = () => {
    console.log(selectedCategories);
    console.log(selectedPlatforms);
    console.log(selectedTypes);
  };

  // const [state, formAction] = useActionState(action, initialState);

  // console.log(state);

  return (
    <div className="p-10 rounded-[10px] bg-[rgba(48,31,8,0.5)] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] max-w-3xs">
      <form action={handleSubmit}>
        {/* Categories */}
        <h1 className="text-lg mb-2 text-white">Categories</h1>
        <SingleFilter
          data={categories}
          name="category"
          selectedIds={selectedCategories}
          onChange={handleCategoryChange}
        />

        {/* Platforms */}
        <h1 className="text-lg mt-4 mb-2 text-white">Platforms</h1>
        <SingleFilter
          data={platforms}
          name="platform"
          selectedIds={selectedPlatforms}
          onChange={handlePlatformChange}
        />

        {/* Type */}
        <h1 className="text-lg mt-4 mb-2 text-white">Type</h1>
        <SingleFilter
          data={types}
          name="type"
          selectedIds={selectedTypes}
          onChange={handleTypeChange}
        />

        {/* Price */}
        <h1 className="text-lg mt-4 mb-2 text-white">Price</h1>
        <PriceFilter />

        {/* Platforms */}
        {/* <h1 className="text-lg mt-4 mb-2 text-white">Platforms</h1>
        <SingleFilter data={platforms} /> */}

        {/* Ratings */}
        <h1 className="text-lg mt-4 mb-2 text-white">Ratings</h1>
        <RatingsFilter ratings={ratings} />

        <button
          type="submit"
          className="bg-[#e58e27] text-nowrap text-white rounded-4xl px-12 py-2 mt-8 cursor-pointer"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default ProductFilters;
