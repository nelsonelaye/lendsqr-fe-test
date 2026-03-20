"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./users.module.scss";
import { MdFilterList } from "react-icons/md";
import dayjs from "dayjs";
import { IoIosArrowDown } from "react-icons/io";
import { StatsCardInterface, UserDetailsInterface } from "@/lib/types";
import StatsCard from "@/components/StatsCard/StatsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";
import UserMenu from "@/components/UserMenu/UserMenu";




export const tableTitles = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];


const Users = () => {
  // const [users, setUsers] = useState<Array<UserDetailsInterface>>([]);
  const [opened] = useState(true);
  // const { fetchAllUsers } = useFetchUsers();
  const [offset, setOffset] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const [isFIlter, setIsFilter] = useState(false);


  const statsList: Array<StatsCardInterface> = useMemo(() => {
     const list = [
        { title: "users", icon: "/svgs/stats-users.svg", value: 2453 },
        { title: "active users", icon: "/svgs/stats-active-user.svg", value: 2453 },
        { title: "users with loans", icon: "/svgs/stats-loan.svg", value: 12453 },
        { title: "users with savings", icon: "/svgs/stats-savings.svg", value: 102453 },
     ];
    
    return list
   }, [])

  
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: ()=>fetchUsers(offset, itemsPerPage),
  })

  console.log("users", users)

  const handleFilterDisplay = () => {
    setIsFilter(!isFIlter);
  };

  const handleFetchUsers = () => {
    // setIsLoading(true);
    // fetchAllUsers().then((res) => {
    //   setIsLoading(false);

    //   if (res.data !== undefined) {
    //     setUsers(res.data);

    //     setPageCount(Math.ceil(res.data.length / itemsPerPage));
    //     setUserData(res?.data?.slice(offset, offset + itemsPerPage));
    //     setOffset(offset + itemsPerPage);
    //   }
    // });
  };

  const handlePageClick = (selectedPage: any) => {
    // (pageCount - 1) * itemsPerPage + 1
    // setOffset((selectedPage * itemsPerPage) % users?.length);
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);
  return (
    <div className={styles["users-wrapper"]}>
      <h2>Users</h2>
      <div className={styles["stats-container"]}>
        {statsList?.map(({ title, value, icon }) => (
          <StatsCard title={title} value={value} icon={icon} key={title} />
        ))}
      </div>
      <div className={styles["table-container"]}>
        {/* {isFIlter && <Filter onClick={handleFilterDisplay} />} */}

      <table>
          <thead>
            <tr>
              {tableTitles?.map((item) => (
                <th key={item}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>{item}</span>
                    <MdFilterList
                      fontSize={18}
                      cursor="pointer"
                      onClick={handleFilterDisplay}
                    />
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {isLoading && <Loader color="#545F7D" style={{ margin: "auto" }} />} */}
            {(users?.data?.length ?? 0) > 0 &&
              users?.data?.map((user: UserDetailsInterface) => (
                <tr key={user.id}>
                  <td>{user?.organization}</td>
                  <td>
                    {user?.username}
                  </td>
          
                  <td>{user?.email}</td>
                  <td>{user?.phoneNumber}</td>
                  <td>
                    {dayjs(user?.createdAt).format("MMM DD, YYYY HH:MM A")}{" "}
                  </td>
                  <td>
                    <div className="status status--active">Active</div>
                  </td>
                  <td>
                    <UserMenu userId={user.id} />
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
          {/* <span>out of {users.length}</span> */}
        </div>
        {/* <Pagination
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
        /> */}
      </div>
    </div>
  );
};

export default Users;
