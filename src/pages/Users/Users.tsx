import { useEffect, useState } from "react";
import { Layout, StatsCard } from "../../components";
import { statsData, tableTitles } from "./utils/values";
import styles from "./users.module.scss";
import { MdFilterList } from "react-icons/md";
import dayjs from "dayjs";
import { HiDotsVertical } from "react-icons/hi";
import useFetchUsers from "../../hooks/userHooks/useFetchUsers";
import { userInterface } from "../../types/userInterface";
import { Menu, Loader, Pagination } from "@mantine/core";
import { BsEye } from "react-icons/bs";
import activate from "../../assets/svg/activate-user.svg";
import blacklist from "../../assets/svg/blacklist-user.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Users = () => {
  const [users, setUsers] = useState<Array<userInterface>>([]);
  const [opened, setOpened] = useState(true);
  const { fetchAllUsers } = useFetchUsers();
  const [offset, setOffset] = useState(0);
  const [itemsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [userData, setUserData] = useState<Array<userInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchUsers = () => {
    setIsLoading(true);
    fetchAllUsers().then((res) => {
      setIsLoading(false);

      if (res !== undefined) {
        setUsers(res);

        setPageCount(Math.ceil(res.length / itemsPerPage));
        setUserData(res?.slice(offset, offset + itemsPerPage));
        setOffset(offset + itemsPerPage);
      }
    });
  };

  const handlePageClick = (selectedPage: any) => {
    console.log(selectedPage * itemsPerPage);
    // (pageCount - 1) * itemsPerPage + 1
    setOffset((selectedPage * itemsPerPage) % users.length);
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);
  return (
    <Layout>
      <h2>Users</h2>
      <div className={styles["stats-container"]}>
        {statsData?.map(({ title, value, icon }) => (
          <StatsCard title={title} value={value} icon={icon} key={title} />
        ))}
      </div>
      <div className={styles["table-container"]}>
        <table>
          <thead>
            <tr>
              {tableTitles?.map((item) => (
                <th key={item}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>{item}</span>
                    <MdFilterList fontSize={18} cursor="pointer" />
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <Loader color="#545F7D" style={{ margin: "auto" }} />}
            {userData.length > 0 &&
              userData?.map((user) => (
                <tr key={user.id}>
                  <td>{user.orgName}</td>
                  <td>
                    {`${user.profile.firstName} ${user.profile.lastName}`}{" "}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.profile.phoneNumber}</td>
                  <td>
                    {dayjs(user.createdAt).format("MMM DD, YYYY HH:MM A")}{" "}
                  </td>
                  <td>
                    <div className="status status--active">Active</div>
                  </td>
                  <td style={{ position: "relative" }}>
                    {opened && (
                      <div className={styles["menu-dropdown"]}>
                        <div>
                          <Menu shadow="md">
                            <Menu.Target>
                              <HiDotsVertical
                                style={{
                                  marginLeft: "20px",
                                  cursor: "pointer",
                                }}
                              />
                            </Menu.Target>

                            <Menu.Dropdown className={styles["dropdown"]}>
                              <Menu.Item
                                icon={<BsEye size={14} color="#545F7D" />}
                              >
                                <Link
                                  to="/users/1"
                                  style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                  }}
                                >
                                  View Details
                                </Link>
                              </Menu.Item>
                              <Menu.Item
                                icon={
                                  <img src={activate} alt="activate user" />
                                }
                              >
                                Blacklist User
                              </Menu.Item>
                              <Menu.Item
                                icon={
                                  <img src={blacklist} alt="activate user" />
                                }
                              >
                                Activate User
                              </Menu.Item>
                            </Menu.Dropdown>
                          </Menu>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={styles["pagination-section"]}>
        <div className={styles["pagination-tracker"]}>
          <span>Showing</span>

          <div className={styles["current"]}>
            <span style={{ marginRight: "10px" }}> {offset}</span>{" "}
            <IoIosArrowDown />
          </div>
          <span>out of {users.length}</span>
        </div>
        <Pagination
          onChange={handlePageClick}
          total={users.length / itemsPerPage}
          position="right"
          styles={(theme) => ({
            control: {
              background: "transparent",
              fontWeight: 400,
              color: "#545F7D",
              border: "0px",
              "&[data-active]": {
                background: "transparent",
                fontWeight: 500,
                color: "#545F7D",
              },
            },
          })}
        />
      </div>
    </Layout>
  );
};

export default Users;
