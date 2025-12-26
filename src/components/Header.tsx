"use client";

import Input from "./ui/Input";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl lg:text-4xl text-primary font-bold">{title}</h1>
      <Input type="Search" placeholder="Search..." id="" onChange={() => {}} />
    </div>
  );
}
