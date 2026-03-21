"use client";
import * as Select from "@radix-ui/react-select";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import styles from "./SelectInput.module.scss";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

const SelectInput = ({
  label,
  name,
  placeholder = "Select",
  options,
  value,
  onChange,
}: SelectInputProps) => {
  return (
    <div className={styles["wrapper"]}>
      {label && (
        <label htmlFor={name} className={styles["form-label"]}>
          {label}
        </label>
      )}

      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          id={name}
          className={styles["trigger"]}
          aria-label={label ?? name}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={styles["icon"]}>
            <FiChevronDown size={14} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={styles["content"]} position="popper" sideOffset={4}>
            <Select.Viewport className={styles["viewport"]}>
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className={styles["item"]}
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                  <Select.ItemIndicator className={styles["indicator"]}>
                    <FiCheck size={13} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectInput;
