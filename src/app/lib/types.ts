export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "blacklist" | "activate";
}

export interface FormInputInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  suffiX?: string;
  label?: string;
  children?: any;
}
