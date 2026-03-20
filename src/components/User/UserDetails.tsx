import { UserDetailsInterface } from "@/lib/types";
import styles from "./user.module.scss";
import UserDetailsSkeleton from "../UserDetailsSkeleton/UserDetailsSkeleton";


export default function GeneralDetails({ user, isLoading }: {  user?: UserDetailsInterface;
  isLoading?: boolean;}) {
  if (isLoading || !user) return <UserDetailsSkeleton />;

  return (
    <>
      {/* Personal Information */}
      <p className={styles["category-title"]}>Personal Information</p>
      <div className={styles["category-details"]}>
        <Field label="Full Name"         value={user.username} />
        <Field label="Phone Number"      value={user.phoneNumber} />
        <Field label="Email Address"     value={user.email} />
        <Field label="BVN"               value={user.personalInfo?.bvn} />
        <Field label="Gender"            value={user.personalInfo?.gender} />
        <Field label="Marital Status"    value={user.personalInfo?.maritalStatus} />
        <Field label="Children"          value={user.personalInfo?.children} />
        <Field label="Type of Residence" value={user.personalInfo?.typeOfResidence} />
      </div>

      {/* Education and Employment */}
      <p className={styles["category-title"]}>Education and Employment</p>
      <div className={styles["category-details"]}>
        <Field label="Level of Education"     value={user.educationAndEmployment?.levelOfEducation} />
        <Field label="Employment Status"      value={user.educationAndEmployment?.employmentStatus} />
        <Field label="Sector of Employment"   value={user.educationAndEmployment?.sectorOfEmployment} />
        <Field label="Duration of Employment" value={user.educationAndEmployment?.durationOfEmployment} />
        <Field label="Office Email"           value={user.educationAndEmployment?.officeEmail} />
        <Field
          label="Monthly Income"
          value={
            user.educationAndEmployment?.minIncome != null &&
            user.educationAndEmployment?.maxIncome != null
              ? `₦${user.educationAndEmployment.minIncome.toLocaleString()}.00 – ₦${user.educationAndEmployment.maxIncome.toLocaleString()}.00`
              : undefined
          }
        />
        <Field
          label="Loan Repayment"
          value={
            user.educationAndEmployment?.loanRepayment != null
              ? `₦${user.educationAndEmployment.loanRepayment.toLocaleString()}`
              : undefined
          }
        />
      </div>

      {/* Socials */}
      <p className={styles["category-title"]}>Socials</p>
      <div className={styles["category-details"]}>
        <Field label="Twitter"   value={user.socials?.twitter} />
        <Field label="Facebook"  value={user.socials?.facebook} />
        <Field label="Instagram" value={user.socials?.instagram} />
      </div>

      {/* Guarantor(s) */}
      <p className={styles["category-title"]}>Guarantor</p>
      {user.guarantor?.map((g, i) => (
        <div key={i} className={styles["category-details"]}>
          <Field label="Full Name"     value={g.fullName} />
          <Field label="Phone Number"  value={g.phoneNumber} />
          <Field label="Email Address" value={g.emailAddress} />
          <Field label="Relationship"  value={g.relationship} />
        </div>
      ))}
    </>
  );
}

const Field = ({ label, value }: { label: string; value?: string | number | null }) => (
  <div className={styles["detail-item"]}>
    <span className={styles["detail-label"]}>{label}</span>
    <span className={styles["detail-value"]}>{value ?? "—"}</span>
  </div>
);
