import ProductCard from "./ProductCard";

function MostTrending() {
  return (
    <section className="my-10 ml-2 backdrop-blur-md">
      <div className="flex items-center w-full justify-between">
        <h1
          className="text-[#dab785] text-4xl my-6 uppercase"
          style={{ fontFamily: "var(--font-pressStart)" }}
        >
          Most Trending
        </h1>

        <p className="text-white">GO TO CAME STORE</p>
      </div>

      <div className="flex gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default MostTrending;
