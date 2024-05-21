import React from "react";
import "./styles/typography.css";
type TypographyComponentType = {
  [key: string]: keyof JSX.IntrinsicElements | React.ElementType; // Accepts HTML tags and custom components
};

const typographyMap: TypographyComponentType = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
};
interface TypographyProps {
  variant: keyof typeof typographyMap; // Ensures variant is one of the keys in typographyMap
  children: React.ReactNode; // Supports any JSX content
  style?: React.CSSProperties; // Optional style prop
}

export default function Typography({ variant, children, style }: TypographyProps) {
  const TypographyComponent = typographyMap[variant];

  if (!TypographyComponent) {
    throw new Error(`Variant '${variant}' not found in typographyMap`);
  }
  return (
    <TypographyComponent style={style} className={`${typographyMap[variant]}__variant`}>
      {children}
    </TypographyComponent>
  );

  // return React.createElement(TypographyComponent, { style, className: `${typographyMap[variant]}__variant` }, children);
}
