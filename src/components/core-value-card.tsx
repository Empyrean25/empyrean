import React from "react";

interface CoreValueCardProps {
  title: string;
  description: string;
}

export function CoreValueCard({ title, description }: CoreValueCardProps) {
  return (
    <div className="bg-[#494949] rounded-lg text-white p-8 text-start hover:bg-[#494949]/95 transition-colors">
      <h4 className="text-xl font-medium mb-4">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
