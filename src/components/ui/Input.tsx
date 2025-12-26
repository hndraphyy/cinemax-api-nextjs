import { IoSearch } from "react-icons/io5";
import { SearchProp } from "@/typs/input";

export default function Input({ id, type, placeholder, onChange }: SearchProp) {
  return (
    <div className="relative">
      <label htmlFor={id} className="absolute top-2 left-2">
        <IoSearch className="text-gray-500 w-6 h-6" />
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-700 rounded-md outline-0 px-10 py-2 bg-gray-900"
      />
    </div>
  );
}
