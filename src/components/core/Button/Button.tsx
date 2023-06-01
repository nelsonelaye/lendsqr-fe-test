import { buttonInterface } from "../../../types/buttonInterface";

const Button = ({ children }: buttonInterface) => {
  return <button className="btn btn--primary">{children}</button>;
};

export default Button;
