"use client";

import Input from "./ui/Input";

interface HeaderProps {
  title: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ title, id, onChange }: HeaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 fixed z-99 max-w-7xl m-auto top-0 left-0 right-0 px-5 md:px-10 py-5 bg-black border-b border-gray-700">
      <h1 className="text-3xl md:text-4xl text-primary font-bold">{title}</h1>
      <Input
        type="Search"
        placeholder="Search..."
        id={id}
        onChange={onChange}
      />
    </div>
  );
}
