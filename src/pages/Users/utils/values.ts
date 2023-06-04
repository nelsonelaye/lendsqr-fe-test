import { statsCardInterface } from "../../../types/statsCardInterface";
import users from "../../../assets/svg/stats-users.svg";
import active from "../../../assets/svg/stats-active-user.svg";
import loans from "../../../assets/svg/stats-loan.svg";
import savings from "../../../assets/svg/stats-savings.svg";

export const statsData: Array<statsCardInterface> = [
  { title: "users", icon: users, value: 2453 },
  { title: "active users", icon: active, value: 2453 },
  { title: "users with loans", icon: loans, value: 12453 },
  { title: "users with savings", icon: savings, value: 102453 },
];

export const tableTitles = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];
