import React from "react";

type TypographyComponentType = {
  [key: string]: keyof JSX.IntrinsicElements | React.ElementType; // Accepts HTML tags and custom components
};

const typographyMap: TypographyComponentType = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
};
interface TypographyProps {
  variant: keyof typeof typographyMap; // Ensures variant is one of the keys in typographyMap
  children: React.ReactNode; // Supports any JSX content
  style?: React.CSSProperties; // Optional style prop
}

export default function Typography({
  variant,
  children,
  style,
}: TypographyProps) {
  const TypographyComponent = typographyMap[variant];

  if (!TypographyComponent) {
    throw new Error(`Variant '${variant}' not found in typographyMap`);
  }

  return React.createElement(TypographyComponent, { style }, children);

  // return <TypographyComponent></TypographyComponent>;
}
