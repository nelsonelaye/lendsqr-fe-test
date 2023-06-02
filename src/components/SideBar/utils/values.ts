import { naviagtionInterface } from "../../../types/dashboardInterface";
import users from "../../../assets/svg/users.svg";
import guarantors from "../../../assets/svg/guarantors.svg";
import loans from "../../../assets/svg/loan.svg";
import handshake from "../../../assets/svg/handshake.svg";
import savings from "../../../assets/svg/piggy-bank.svg";
import loanRequest from "../../../assets/svg/loan-request.svg";
import whitelist from "../../../assets/svg/user-check.svg";
import karma from "../../../assets/svg/user-times.svg";
import briefcase from "../../../assets/svg/briefcase.svg";
import bank from "../../../assets/svg/bank.svg";
import coins from "../../../assets/svg/coins.svg";
import transaction from "../../../assets/svg/transaction.svg";
import services from "../../../assets/svg/galaxy.svg";
import account from "../../../assets/svg/user-cog.svg";
import settlement from "../../../assets/svg/scroll.svg";
import chart from "../../../assets/svg/chart.svg";
import sliders from "../../../assets/svg/sliders.svg";
import badge from "../../../assets/svg/badge.svg";
import clipboard from "../../../assets/svg/clipboard.svg";
import tire from "../../../assets/svg/tire.svg";

export const customerNavigations: Array<naviagtionInterface> = [
  { title: "Users", imageSrc: users, link: "/users" },
  { title: "Guarantors", imageSrc: guarantors },
  { title: "Loans", imageSrc: loans },
  { title: "Decision Models", imageSrc: handshake },
  { title: "Savings", imageSrc: savings },
  { title: "Loan Requests", imageSrc: loanRequest },
  { title: "Whitelist", imageSrc: whitelist },
  { title: "Karma", imageSrc: karma },
];
export const businessNavigations: Array<naviagtionInterface> = [
  { title: "Organization", imageSrc: briefcase },
  { title: "Loan Products", imageSrc: loanRequest },
  { title: "Savings Products", imageSrc: bank },
  { title: "Fees and Charges", imageSrc: coins },
  { title: "Transactions", imageSrc: transaction },
  { title: "Services", imageSrc: services },
  { title: "Service Account", imageSrc: account },
  { title: "Settlements", imageSrc: settlement },
  { title: "Reports", imageSrc: chart },
];

export const settingsNavigations: Array<naviagtionInterface> = [
  { title: "Preferences", imageSrc: sliders },
  { title: "Fees and Pricing", imageSrc: badge },
  { title: "Audit Logs", imageSrc: clipboard },
  { title: "Systems Messages", imageSrc: tire },
];
