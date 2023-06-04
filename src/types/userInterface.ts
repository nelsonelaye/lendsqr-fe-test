export interface userInterface {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  email: string;
  id: string;
  orgName: string;
  phoneNumber: string;
  lastActiveDate: string;
  userName: string;
  guarantor: guarantorInterface;
  education: educationInterface;
  profile: profileInterface;
  socials: socialsInterface;
}

export interface profileInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  address: string;
  bvn: string;
  currency: string;
}

export interface educationInterface {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: Array<string>;
  officeEmail: string;
  sector: string;
}

export interface socialsInterface {
  facebook: string;
  instagram: string;
  twitter: string;
}
export interface guarantorInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}
