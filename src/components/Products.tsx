import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="w-full ml-6">
      <div className="flex w-full justify-between items-center mb-2">
        <div>
            <h2 className="text-white text-2xl">Search results for "Valorant"</h2>
            <p className="text-white/80 text-xl">10 results found</p>
        </div>

        <div className="border-white border-2 flex rounded-[30px] px-4 py-2">
            <button className="text-white">Sort by</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
