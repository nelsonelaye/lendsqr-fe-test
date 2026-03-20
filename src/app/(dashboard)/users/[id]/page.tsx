"use client";

import { useState, useEffect } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import styles from "./user-details.module.scss";
import { BsStar, BsStarFill } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/Button/Button";
import * as Tabs from "@radix-ui/react-tabs";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "@/lib/api";
import { useParams } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import GeneralDetails from "@/components/User/UserDetails";

const TAB_LABELS = [
  { value: "general",     label: "General Details" },
  { value: "documents",   label: "Documents" },
  { value: "bank",        label: "Bank Details" },
  { value: "loans",       label: "Loans" },
  { value: "savings",     label: "Savings" },
  { value: "app-system",  label: "App and System" },
];

const UserDetails = () => {
    const { id } = useParams<{ id: string }>();


  const { data: user, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });
    
    // console.log(user)

  return (
    <div>
      <Link href="/users" className={styles["navigate-back"]}>
              {/* <HiOutlineArrowLongLeft style={{ marginRight: "10px" }} /> */}
              <Image src="/svgs/arrow-back.svg" alt="Back to Users" width={27} height={9} />
        <span>Back to Users</span>
      </Link>

      <div className={styles["page-header"]}>
        <h2>User Details</h2>
        <div className={styles["active-btns"]}>
          <Button
            variant="blacklist"
            onClick={() => toast.info("Blacklist feature coming soon", { description: "This action is not available yet." })}
          >
            Blacklist User
          </Button>
          <Button
            variant="activate"
            onClick={() => toast.info("Activate feature coming soon", { description: "This action is not available yet." })}
          >
            Activate User
          </Button>
        </div>
      </div>

      {/* Single Tabs.Root wraps both the list (in the header card) and content panels */}
      <Tabs.Root defaultValue="general">
      <div className={styles["top-details"]}>
        {/* Profile highlight row */}
        <div className={styles["highlight"]}>
          {isLoading ? (
            <>
              {/* Avatar */}
              <span className={styles["skeleton-avatar"]} />

              {/* Name + ID */}
              <div className={styles["skeleton-block"]}>
                <span className={styles["skeleton-name"]} />
                <span className={styles["skeleton-id"]} />
              </div>

              {/* Tier */}
              <div className={`${styles["tier"]} ${styles["skeleton-block"]}`}>
                <span className={styles["skeleton-label"]} />
                <span className={styles["skeleton-stars"]} />
              </div>

              {/* Balance + bank */}
              <div className={styles["skeleton-block"]}>
                <span className={styles["skeleton-amount"]} />
                <span className={styles["skeleton-bank"]} />
              </div>
            </>
          ) : (
            <>
              <div className={styles["profile-photo"]}>
                {user?.username?.charAt(0).toUpperCase() ?? "U"}
              </div>

              <div className={styles["top-text"]}>
                <h2 className={styles["top-details-title"]}>{user?.username ?? "—"}</h2>
                <span className={styles["username"]}>{user?.id ?? ""}</span>
              </div>

              <div className={styles["tier"]}>
                <span>User&apos;s Tier</span>
                <div className={styles["ratings"]}>
                  {Array.from({ length: 3 }).map((_, i) =>
                    i < (user?.tier ?? 0) ? (
                      <BsStarFill key={i} />
                    ) : (
                      <BsStar key={i} />
                    )
                  )}
                </div>
              </div>

              <div className={styles["top-text"]}>
                <h2 className={styles["top-details-title"]}>
                  ₦{user?.accountBalance?.toLocaleString("en-NG", { minimumFractionDigits: 2 }) ?? "0.00"}
                </h2>
                <span className={styles["bank-details"]}>
                  {user?.accountNumber} / {user?.bankName}
                </span>
              </div>
            </>
          )}
        </div>

        <Tabs.List className={styles["tab-list"]} aria-label="User detail sections">
          {TAB_LABELS.map(({ value, label }) => (
            <Tabs.Trigger
              key={value}
              value={value}
              className={styles["tab-trigger"]}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>




        <Tabs.Content value="general" className={styles["view-details"]}>
          <GeneralDetails user={user} isLoading={isLoading} />
        </Tabs.Content>

        <Tabs.Content value="documents" className={styles["view-details"]}>
          <p style={{ padding: "40px 30px", color: "#545F7D" }}>No documents available.</p>
        </Tabs.Content>
        <Tabs.Content value="bank" className={styles["view-details"]}>
          <p style={{ padding: "40px 30px", color: "#545F7D" }}>No bank details available.</p>
        </Tabs.Content>
        <Tabs.Content value="loans" className={styles["view-details"]}>
          <p style={{ padding: "40px 30px", color: "#545F7D" }}>No loan records.</p>
        </Tabs.Content>
        <Tabs.Content value="savings" className={styles["view-details"]}>
          <p style={{ padding: "40px 30px", color: "#545F7D" }}>No savings records.</p>
        </Tabs.Content>
        <Tabs.Content value="app-system" className={styles["view-details"]}>
          <p style={{ padding: "40px 30px", color: "#545F7D" }}>No app/system data available.</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default UserDetails;
