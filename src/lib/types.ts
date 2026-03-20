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


export interface StatsCardInterface {
  title: string;
  value: number;
  icon: string;
}

export interface LayoutInterface {
  children: React.ReactNode;
}

export interface NaviagtionInterface {
  imageSrc: string;
  title: string;
  link?: string;
  suffixIcon?: JSX.Element;
  onClickAction?: () => void;
}

export type UserStatus = "inactive" | "pending" | "blacklisted" | "active";

export interface UserRecord {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string; // e.g., "May 15, 2020 10:00 AM"
  status: UserStatus;
}

export interface UserDetailsInterface extends UserRecord {
  id: string;
  tier: 1 | 2 | 3;
  accountBalance: number;
  bankName: string;
  accountNumber: string;

  personalInfo: {
    bvn: string;
    gender: "Male" | "Female";
    maritalStatus: string;
    children: string | "None";
    typeOfResidence: string;
  };

  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    minIncome: number;
    maxIncome: number;
    loanRepayment: number;
  };

  socials: {
    twitter: string;
    instagram: string;
    facebook: string;
  };

  guarantor: Array<{
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }>;
}
