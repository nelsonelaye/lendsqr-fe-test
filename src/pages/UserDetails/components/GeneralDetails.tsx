import { Detail } from "../../../components";
import { userInterface } from "../../../types/userInterface";
import styles from "../userDetails.module.scss";

interface props {
  values: userInterface;
}
const GeneralDetails = ({ values }: props) => {
  return (
    <div className={styles["general-container"]}>
      <div className={styles["category"]}>
        <h4 className={styles["category-title"]}>Personal Information</h4>
        <div className={styles["category-details"]}>
          <Detail
            title="Full name"
            value={`${values?.profile.firstName} ${values?.profile.lastName}`}
          />
          <Detail title="phone number" value={values.profile.phoneNumber} />
          <Detail title="email address" value={values.email} />
          <Detail title="bvn" value={values.profile.bvn} />
          <Detail title="gender" value={values.profile.gender} />
          <Detail title="Marital status" value="NIL" />
          <Detail title="Type of residence" value="NIL" />
          <Detail title="children" value="NIL" />
        </div>
      </div>
      <div className={styles["category"]}>
        <h4 className={styles["category-title"]}>Education and Employment</h4>
        <div className={styles["category-details"]}>
          <Detail title="level of education" value={values.education.level} />
          <Detail
            title="employment status"
            value={values.education.employmentStatus}
          />
          <Detail
            title="sector of employment"
            value={values.education.sector}
          />
          <Detail
            title="Duration of employment"
            value={values.education.duration}
          />
          <Detail title="office email" value={values.education.officeEmail} />
          <Detail
            title="Monthly income"
            value={values.education.monthlyIncome[1]}
          />
          <Detail
            title="loan repayment"
            value={values.education.loanRepayment}
          />
        </div>
      </div>
      <div className={styles["category"]}>
        <h4 className={styles["category-title"]}>Socials</h4>
        <div className={styles["category-details"]}>
          <Detail title="twitter" value={values.socials.twitter} />
          <Detail title="facebook" value={values.socials.facebook} />
          <Detail title="instagram" value={values.socials.instagram} />
        </div>
      </div>
      <div className={styles["category"]}>
        <h4 className={styles["category-title"]}>Guarantor</h4>
        <div className={styles["category-details"]}>
          <Detail
            title="Full name"
            value={`${values.guarantor.firstName} ${values.guarantor.lastName}`}
          />
          <Detail title="phone number" value={values.guarantor.phoneNumber} />
          <Detail title="address" value={values.guarantor.address} />
          <Detail title="Relationship" value="NIL" />
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
