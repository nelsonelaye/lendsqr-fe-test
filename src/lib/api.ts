import axios from "axios";
import { UserDetailsInterface } from "./types";

export const fetchUsers = async (page = 1, size = 10) => {
  const res = await axios.get("/api/users", { params: { page, size } });
  return res.data as { data: UserDetailsInterface[]; total: number };
};

export const fetchUserById = async (id: string) => {
  const res = await axios.get(`/api/users/${id}`);
  return res.data as UserDetailsInterface;
};
