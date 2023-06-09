import { axiosBaseInstance } from "../../services/axiosBaseInstance";

const useFetchUsers = () => {
  const fetchAllUsers = async () => {
    return await axiosBaseInstance
      .get("/users")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
  return { fetchAllUsers };
};

export default useFetchUsers;
