import { buttonInterface } from "../../../types/buttonInterface";

const Button = ({ children, variant }: buttonInterface) => {
  return <button className={`btn btn--${variant}`}>{children}</button>;
};

export default Button;
