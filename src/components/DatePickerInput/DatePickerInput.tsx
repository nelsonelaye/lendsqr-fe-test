"use client";
import { useState, useRef, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerInput.module.scss";
import { CustomInputProps, DatePickerInputProps } from "@/lib/types";



const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
  ({ value, onClick, placeholder = "Date", calendarRef }, ref) => (
    <div className={styles["input-wrapper"]} ref={ref}>
      <span className={styles["value-text"]}>{value || placeholder}</span>
      <button
        ref={calendarRef}
        type="button"
        onClick={onClick}
        className={styles["icon-btn"]}
        aria-label="Open date picker"
      >
        <LuCalendarDays size={18} />
      </button>
    </div>
  )
);
CustomInput.displayName = "DateCustomInput";



export default function DatePickerInput({
  label,
  name,
  placeholder = "Date",
  value,
  onChange,
}: DatePickerInputProps) {
  const [internal, setInternal] = useState<Date | null>(null);
  const calendarRef = useRef<HTMLButtonElement>(null);

  const selected = value !== undefined ? value : internal;
  const handleChange = (date: Date | null) => {
    if (onChange) onChange(date);
    else setInternal(date);
  };

  return (
    <div className={styles["wrapper"]}>
      {label && (
        <label htmlFor={name} className={styles["label"]}>
          {label}
        </label>
      )}
      <ReactDatePicker
        selected={selected}
        onChange={handleChange}
        dateFormat="dd MMM yyyy"
        popperTargetRef={calendarRef}
        popperPlacement="bottom-start"
        customInput={
          <CustomInput placeholder={placeholder} calendarRef={calendarRef} />
        }
      />
    </div>
  );
}
