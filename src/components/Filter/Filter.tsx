
import Button from "../Button/Button";
import FormInput from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import styles from "./Filter.module.scss";

const ORG_OPTIONS    = [{ value: "lendsqr", label: "Lendsqr" }];
const STATUS_OPTIONS = [
  { value: "active",      label: "Active" },
  { value: "inactive",    label: "Inactive" },
  { value: "pending",     label: "Pending" },
  { value: "blacklisted", label: "Blacklisted" },
];

interface FilterProps {
  onClose?: () => void;
}

const Filter = ({ onClose }: FilterProps) => {
  return (
    <form className={styles["filter-container"]} onSubmit={(e) => { e.preventDefault(); onClose && onClose(); }}>
      <SelectInput
        label="Organization"
        name="organization"
        placeholder="Select"
        options={ORG_OPTIONS}
      />
      <FormInput name="username"    placeholder="User"         type="text"  label="Username"     />
      <FormInput name="email"       placeholder="Email"        type="email" label="Email"        />
      <DatePickerInput name="date" label="Date" placeholder="Date" />
      <FormInput name="phoneNumber" placeholder="Phone Number" type="text"  label="Phone Number" />
      <SelectInput
        label="Status"
        name="status"
        placeholder="Select"
        options={STATUS_OPTIONS}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button variant="secondary" style={{ width: "98px" }} type="reset">Reset</Button>
        <Button variant="primary" style={{ width: "98px" }} type="submit">Filter</Button>
      </div>
    </form>
  );
};

export default Filter;
