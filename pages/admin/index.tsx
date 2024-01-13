import type { NextPage } from "next";
import Head from "next/head";
import { AdminHeader } from "../../share/components/adminHeader";
import { AdminAside } from "../../share/components/adminAside";

const AdminDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>

      <div className=" bg-textBlack min-h-screen px-4">
    
        <AdminHeader />

       
        <main>
<AdminAside />
        </main>
</div>
    </>
  );
};

export default AdminDashboard;
