import React from "react";

export interface layoutInterface {
  children: React.ReactNode;
}

export interface naviagtionInterface {
  imageSrc: string;
  title: string;
  link?: string;
  suffixIcon?: JSX.Element;
}
