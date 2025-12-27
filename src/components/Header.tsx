"use client";

import Input from "./ui/Input";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 fixed z-99 max-w-7xl m-auto top-0 left-0 right-0 p-5 bg-black border-b border-gray-700">
      <h1 className="text-3xl md:text-4xl text-primary font-bold">{title}</h1>
      <Input type="Search" placeholder="Search..." id="" onChange={() => {}} />
    </div>
  );
}
