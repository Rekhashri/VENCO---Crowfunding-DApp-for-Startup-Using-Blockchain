import React from "react";

const Logo = ({ color = "text-gray-800" }) => {
  return (
    <svg
      className={`w-24 h-12 ${color}`} // Adjust width and height as needed
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* Letter V */}
      <path d="M10 10 L30 40 L50 10" />
      
      {/* Letter E */}
      <path d="M60 10 L60 40 M60 10 H90 M60 25 H85 M60 40 H90" />
      
      {/* Letter N */}
      <path d="M100 40 L100 10 L130 40 L130 10" />
      
      {/* Letter C */}
      <path d="M140 40 C130 40, 120 30, 120 20 C120 10, 130 0, 140 0" />
      
      {/* Letter O */}
      <ellipse cx="170" cy="25" rx="15" ry="20" />
    </svg>
  );
};

export default Logo;
