import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export default function Logo({ className = "", size = "md", theme = "light" }: LogoProps) {
  const dimensions = {
    sm: 120,
    md: 180,
    lg: 240,
  };

  const width = dimensions[size];

  return (
    <div id="company-logo" className={`flex items-center ${className}`}>
      <img
        src="/co-working-logo.png"
        alt="Co-Working Space Logo"
        width={width}
        className="object-contain h-auto max-w-full"
      />
    </div>
  );
}
