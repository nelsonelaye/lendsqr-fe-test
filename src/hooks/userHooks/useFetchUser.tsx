import React from "react";
import { axiosBaseInstance } from "../../services/axiosBaseInstance";

const useFetchUser = () => {
  const fetchUser = async (userId: string) => {
    return await axiosBaseInstance
      .get(`/users/${userId}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  return { fetchUser };
};

export default useFetchUser;
