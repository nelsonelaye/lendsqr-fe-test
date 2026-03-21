"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import styles from "./users.module.scss";
import { MdFilterList } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import dayjs from "dayjs";
import { StatsCardInterface, UserDetailsInterface } from "@/lib/types";
import StatsCard from "@/components/StatsCard/StatsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers, fetchUsers } from "@/lib/api";
import UserMenu from "@/components/UserMenu/UserMenu";
import Pagination from "@/components/Pagination/Pagination";
import TableSkeleton from "@/components/TableSkeleton/TableSkeleton";
import Filter from "@/components/Filter/Filter";

const Users = () => {
  const tableTitles = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const [offset, setOffset] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  const { data: allUsers, isError: isAllUsersError } = useQuery({
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

  const { data: users, isLoading, isError: isUsersError } = useQuery({
    queryKey: ["users", offset, itemsPerPage],
    queryFn: () => fetchUsers(offset, itemsPerPage),
  });


  const filterRef = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  // close filter when clicking outside the panel
  useEffect(() => {
    if (!isFilterOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;

      if (target.closest("[data-radix-popper-content-wrapper]")) return;

      // Ignore clicks on any filter icon
      if (target.closest("[data-filter-icon]")) return;

      if (filterRef.current && !filterRef.current.contains(target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);


  return (
    <div className={styles["users-wrapper"]}>
      <h2>Users</h2>
      <div className={styles["stats-container"]}>
        {statsList?.map(({ title, value, icon }) => (
          <StatsCard title={title} value={value} icon={icon} key={title} />
        ))}
      </div>
      <div className={styles["table-container"]}>
        {isFilterOpen && (
          <div ref={filterRef}>
            <Filter onClose={toggleFilter} />
          </div>
        )}

        <table>
          <thead>
            <tr>
              {tableTitles?.map((item) => (
                <th key={item}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>{item}</span>
                    <span data-filter-icon="true">
                      <MdFilterList
                        fontSize={18}
                        style={{ cursor: "pointer" }}
                        onClick={toggleFilter}
                      />
                    </span>
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(isAllUsersError || isUsersError) ? (
              <tr style={{ height: "400px" }}>
                <td colSpan={7} className={styles["empty-state"]}>
                  <p style={{ color: "#E4033B" }}>Failed to load users. Please check your network or try again later.</p>
                </td>
              </tr>
            ) : isLoading ? (
              <TableSkeleton rows={10} />
            ) : (users?.data?.length ?? 0) === 0 ? (
              <tr
                style={{
                  height: "400px",
                }}
              >
                <td colSpan={7} className={styles["empty-state"]}>
                  <HiOutlineDocumentSearch size={56} />
                  <p>No users found</p>
                </td>
              </tr>
            ) : (
              users?.data?.map((user: UserDetailsInterface) => (
                <tr key={user.id}>
                  <td>{user?.organization}</td>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phoneNumber}</td>
                  <td>
                    {dayjs(user?.createdAt).format("MMM DD, YYYY hh:mm A")}
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
              ))
            )}
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
