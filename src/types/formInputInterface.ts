export interface formInputInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  suffiX?: string;
  label?: string;
  children?: any;
}
