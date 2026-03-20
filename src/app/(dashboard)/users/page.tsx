"use client";

import { useMemo, useState } from "react";
import styles from "./users.module.scss";
import { MdFilterList } from "react-icons/md";
import dayjs from "dayjs";
import { StatsCardInterface, UserDetailsInterface } from "@/lib/types";
import StatsCard from "@/components/StatsCard/StatsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers, fetchUsers } from "@/lib/api";
import UserMenu from "@/components/UserMenu/UserMenu";
import Pagination from "@/components/Pagination/Pagination";




export const tableTitles = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];


const Users = () => {
  const [offset, setOffset] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFIlter, setIsFilter] = useState(false);


  const { data: allUsers } = useQuery({
    queryKey: ["users", "all"],
    queryFn: fetchAllUsers,
  });

  const statsList: Array<StatsCardInterface> = useMemo(() => {
    const all = allUsers?.data ?? [];
    const list = [
      { title: "users", icon: "/svgs/stats-users.svg", value: allUsers?.total ?? 0 },
      {
        title: "active users",
        icon: "/svgs/stats-active-user.svg",
        value: all.filter((u) => u.status === "active").length,
      },
      {
        title: "users with loans",
        icon: "/svgs/stats-loan.svg",
        value: all.filter((u) => (u.educationAndEmployment?.loanRepayment ?? 0) > 0).length,
      },
      {
        title: "users with savings",
        icon: "/svgs/stats-savings.svg",
        value: all.filter((u) => (u.accountBalance ?? 0) > 0).length,
      },
    ];

    return list;
  }, [allUsers]);

  const { data: users, isLoading } = useQuery({
    queryKey: ["users", offset, itemsPerPage],
    queryFn: () => fetchUsers(offset, itemsPerPage),
  });

  console.log("users", users)

  const handleFilterDisplay = () => {
    setIsFilter(!isFIlter);
  };


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
                  <td>{user?.username}</td>

                  <td>{user?.email}</td>
                  <td>{user?.phoneNumber}</td>
                  <td>
                    {dayjs(user?.createdAt).format("MMM DD, YYYY HH:MM A")}{" "}
                  </td>
                  <td>
                    <div
                      className={`${styles.status} ${styles[`status--${user.status}`]}`}
                    >
                      {user.status}
                    </div>
                  </td>
                  <td>
                    <UserMenu userId={user.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        total={allUsers?.total ?? 0}
        currentPage={offset}
        pageSize={itemsPerPage}
        onPageChange={setOffset}
        onPageSizeChange={setItemsPerPage}
      />
    </div>
  );
};

export default Users;
