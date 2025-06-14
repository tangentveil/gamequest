import ProductFilters from "./ProductFilters";
import Products from "./Products";

import { TbArrowRightDashed } from "react-icons/tb";
import ProductSection from "./ProductSection";

function ProductsSection() {
  return (
    <section className="flex flex-col">
      <div className="flex p-6 bg-[#3d352a]/50">
        <ProductFilters />
        <Products />
      </div>

      <div className="flex items-center w-full justify-between p-6">
        <p className="text-white text-3xl">
          Checkout games similar to “Valorant”
        </p>
        <div className="flex items-center gap-2">
          <p className="text-white text-lg">VIEW ALL</p>
          <TbArrowRightDashed className="text-white text-lg" />
        </div>
      </div>

      <ProductSection title="Valorant" position="middle" />
      <ProductSection title="Evolution" position="right" />
      <ProductSection title="Battle of the Warlords" position="left" />
    </section>
  );
}

export default ProductsSection;
