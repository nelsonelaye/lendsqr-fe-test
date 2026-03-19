import { JSX } from "react";

export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "blacklist" | "activate";
}

export interface FormInputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  suffiX?: string;
  label?: string;
  error?: string;
  children?: React.ReactNode;
}

export interface LayoutInterface {
  children: React.ReactNode;
}

export interface NaviagtionInterface {
  imageSrc: string;
  title: string;
  link?: string;
  suffixIcon?: JSX.Element;
}
