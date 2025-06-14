import GreenDot from "./GreenDot";
import ProductSectionContent from "./ProductSectionContent";
import Stars from "./Stars";

function ProductSection({ title, position }: { title: string; position:string }) {
  return (
    <section className="bg-black/30 backdrop-blur-md my-10 p-4 w-full">
      <div className="flex flex-col text-white items-center justify-end w-full ">
        <div className="flex items-center justify-end w-full gap-2">
          <GreenDot />
          <p>40 of your friends are playing</p>
        </div>
        <div className="flex justify-end w-full">
          <Stars />
        </div>
      </div>

      <ProductSectionContent title={title} position={position} />
    </section>
  );
}

export default ProductSection;
