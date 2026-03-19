import { NaviagtionInterface } from "@/app/lib/types";

export const customerNavigations: Array<NaviagtionInterface> = [
  { title: "Users", imageSrc: "/svgs/users.svg", link: "/users" },
  { title: "Guarantors", imageSrc: "/svgs/guarantors.svg", link: "/guarantors" },
  { title: "Loans", imageSrc: "/svgs/loan.svg", link: "/loans" },
  { title: "Decision Models", imageSrc: "/svgs/handshake.svg", link: "/decision-models" },
  { title: "Savings", imageSrc: "/svgs/piggy-bank.svg", link: "/savings" },
  { title: "Loan Requests", imageSrc: "/svgs/loan-request.svg", link: "/loan-requests" },
  { title: "Whitelist", imageSrc: "/svgs/user-check.svg", link: "/whitelist" },
  { title: "Karma", imageSrc: "/svgs/user-times.svg", link: "/karma" },
];

export const businessNavigations: Array<NaviagtionInterface> = [
  { title: "Organization", imageSrc: "/svgs/briefcase.svg", link: "/organization" },
  { title: "Loan Products", imageSrc: "/svgs/loan-request.svg", link: "/loan-products" },
  { title: "Savings Products", imageSrc: "/svgs/bank.svg", link: "/savings-products" },
  { title: "Fees and Charges", imageSrc: "/svgs/coins.svg", link: "/fees-and-charges" },
  { title: "Transactions", imageSrc: "/svgs/transaction.svg", link: "/transactions" },
  { title: "Services", imageSrc: "/svgs/galaxy.svg", link: "/services" },
  { title: "Service Account", imageSrc: "/svgs/user-cog.svg", link: "/service-account" },
  { title: "Settlements", imageSrc: "/svgs/scroll.svg", link: "/settlements" },
  { title: "Reports", imageSrc: "/svgs/chart.svg", link: "/reports" },
];

export const settingsNavigations: Array<NaviagtionInterface> = [
  { title: "Preferences", imageSrc: "/svgs/sliders.svg", link: "/preferences" },
  { title: "Fees and Pricing", imageSrc: "/svgs/badge.svg", link: "/fees-and-pricing" },
  { title: "Audit Logs", imageSrc: "/svgs/clipboard.svg", link: "/audit-logs" },
  { title: "Systems Messages", imageSrc: "/svgs/tire.svg", link: "/systems-messages" },
];
