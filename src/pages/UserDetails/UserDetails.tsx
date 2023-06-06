import { Link } from "react-router-dom";
import { Button, Layout } from "../../components";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import styles from "./userDetails.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { Rating, Tabs, TabsProps } from "@mantine/core";
import { BsStar, BsStarFill } from "react-icons/bs";
import GeneralDetails from "./components/GeneralDetails";

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : "rgba(0, 0, 0, 0.8)",
          border: `0px solid ${theme.colors.gray[4]}`,
          padding: `0px 20px 10px`,
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "19px",
          textAlign: "center",

          "&[data-active]": {
            color: "#39CDCC",
            borderBottom: "2px solid  #39CDCC",
          },
        },

        tabsList: {
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        },
      })}
      {...props}
    />
  );
}

const UserDetails = () => {
  return (
    <Layout>
      <Link to="/users" className={styles["navigate-back"]}>
        <HiOutlineArrowLongLeft style={{ marginRight: "10px" }} />
        <span
          style={{
            fontWeight: 400,
            fontSize: "16px",
          }}
        >
          Back to Users
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Users Details</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            gap: "20px",
          }}
        >
          <Button variant="blacklist">Blacklist user</Button>
          <Button variant="activate">Blacklist user</Button>
        </div>
      </div>

      <div className={styles["top-details"]}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div className={styles["profile-photo"]}>
            <AiOutlineUser />
          </div>
          {/* <img src="" alt="" className={styles["profile-photo"]} /> */}
          <div>
            <h2 className={styles["top-details-title"]}>Grace Effiom</h2>
            <span className={styles["username"]}>LSQFf587g90</span>
          </div>
          <div className={styles["tier"]}>
            User’s Tier
            <div className={styles["ratings"]}>
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div>
            <h2 className={styles["top-details-title"]}>₦200,000.00</h2>
            <span className={styles["bank-details"]}>
              9912345678/Providus Bank
            </span>
          </div>
        </div>

        <StyledTabs defaultValue="general">
          <Tabs.List grow>
            <Tabs.Tab value="general">General Details</Tabs.Tab>
            <Tabs.Tab value="documents">Documents</Tabs.Tab>
            <Tabs.Tab value="bank-details">Bank Details</Tabs.Tab>
            <Tabs.Tab value="loans">Loans</Tabs.Tab>
            <Tabs.Tab value="savings">Savings</Tabs.Tab>
            <Tabs.Tab value="app-and-system">App and System</Tabs.Tab>
          </Tabs.List>
        </StyledTabs>
      </div>

      <div className={styles["view-details"]}>
        <StyledTabs defaultValue="general">
          <Tabs.Panel value="general" pt="xs">
            <GeneralDetails />
          </Tabs.Panel>

          <Tabs.Panel value="documents" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="loans" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </StyledTabs>
      </div>
    </Layout>
  );
};

export default UserDetails;
