import { Detail } from "../../../components";
import styles from "../userDetails.module.scss";
const GeneralDetails = () => {
  return (
    <>
      <div>
        <h4 className={styles["category-title"]}>Personal Information</h4>
        <div className={styles["category-details"]}>
          <Detail title="Full name" value="something" />
          <Detail title="phone number" value="something" />
          <Detail title="email address" value="something" />
          <Detail title="bvn" value="something" />
          <Detail title="gender" value="something" />
          <Detail title="Marital status" value="something" />
          <Detail title="Type of residence" value="something" />
          <Detail title="children" value="something" />
        </div>
      </div>
      <div>
        <h4 className={styles["category-title"]}>Education and Employment</h4>
        <div className={styles["category-details"]}>
          <Detail title="level of education" value="something" />
          <Detail title="employment status" value="something" />
          <Detail title="sector of employment" value="something" />
          <Detail title="Duration of employment" value="something" />
          <Detail title="office email" value="something" />
          <Detail title="Monthly income" value="something" />
          <Detail title="loan repayment" value="something" />
        </div>
      </div>
      <div>
        <h4 className={styles["category-title"]}>Socials</h4>
        <div className={styles["category-details"]}>
          <Detail title="twitter" value="something" />
          <Detail title="facebook" value="something" />
          <Detail title="instagram" value="something" />
        </div>
      </div>
      <div>
        <h4 className={styles["category-title"]}>Guarantor</h4>
        <div className={styles["category-details"]}>
          <Detail title="Full name" value="something" />
          <Detail title="phone number" value="something" />
          <Detail title="email address" value="something" />
          <Detail title="Relationship" value="something" />
        </div>
      </div>
    </>
  );
};

export default GeneralDetails;
