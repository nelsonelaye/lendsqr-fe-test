import { Button, FormInput, SelectInput } from "../";
import styles from "./filter.module.scss";

interface props {
  onClick: () => void;
}
const Filter = ({ onClick }: props) => {
  return (
    <div className={styles["filter-container"]}>
      <SelectInput
        label="Organization"
        name="organization"
        placeholder="select"
      >
        <option value="one">One</option>
      </SelectInput>
      <FormInput
        name="username"
        placeholder="User"
        type="text"
        label="Username"
      />
      <FormInput name="email" placeholder="Email" type="email" label="Email" />
      <FormInput name="date" placeholder="Date" type="date" label="Date" />
      <FormInput
        name="phoneNumber"
        placeholder="Phone Number"
        type="text"
        label="Phone Number"
      />
      <SelectInput label="Status" name="status" placeholder="select">
        <option value="one">One</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </SelectInput>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button variant="secondary">Reset</Button>
        <Button variant="primary" onClick={onClick}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Filter;
