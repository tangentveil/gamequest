function PriceFilter() {
  return (
    <div className="flex gap-4 items-center">
      <div className="border-white border-[1px] rounded-[10px] flex items-center justify-center h-10 w-20 gap-2 bg-[#2b2417]">
        <span className="text-white">$</span>
        <input type="text" className="h-8 w-8 outline-0 text-white" placeholder="46" id="minPrice" />
      </div>

      <span className="text-white">-</span>

      <div className="border-white border-[1px] rounded-[10px] flex items-center justify-center h-10 w-20 gap-2 bg-[#2b2417]">
        <span className="text-white">$</span>
        <input type="text" className="h-8 w-8 outline-0 text-white" placeholder="56" id="maxPrice" />
      </div>
    </div>
  );
}

export default PriceFilter;
