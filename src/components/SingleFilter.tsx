import { FilterProps } from "@/utils/types";

type SingleFilterProps = {
  data: FilterProps[];
  name: string;
  selectedIds: string[];
  onChange: (id: string) => void;
};

function SingleFilter({ data, name, selectedIds, onChange }: SingleFilterProps) {

//   const handleChange = (id: string) => {
//     console.log(id);
//     if (selectedIds.includes(id)) {
//       setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
//     } else setSelectedIds([...selectedIds, id]);
//   };

  return (
    <>
      {data.map((item) => {
        const { id, text } = item;
        const isChecked: boolean = selectedIds.includes(id);

        return (
          <div key={id} className="p-2 flex items-center gap-2 text-white">
            <input
              type="checkbox"
              id={id}
              className="hidden peer"
              checked={isChecked}
              name={name}
              value={text}
              onChange={() => onChange(id)}
            />
            <label
              htmlFor={id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`w-5 h-5 border border-white rounded-md ${
                  isChecked ? "bg-white" : "bg-[#2b2417]"
                } peer-checked:bg-white`}
              ></div>
              {text}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default SingleFilter;
