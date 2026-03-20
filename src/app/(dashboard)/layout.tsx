import Layout from "@/layouts/Dashboard/DashboardLayout";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Layout>
      <Toaster position="top-right" duration={4000} richColors />
      {children}
    </Layout>
  );
}


export default DashboardLayout