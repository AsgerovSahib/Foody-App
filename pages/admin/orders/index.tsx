import Barchart from "@/share/components/LineChart";
import { AdminAside } from "@/share/components/adminAside";
import { AdminHeader } from "@/share/components/adminHeader";
import { AdminLeftModal } from "@/share/components/adminLeftModal";
import AdminOrdersTable from "@/share/components/adminOrdersTable";
import AdminSecondTitle from "@/share/components/adminSecondTitle";
import OrdersChart from "@/share/components/ordersChart";
import Head from "next/head";
import React, { useState } from "react";

const item = [
  {
    id: 9177,
    customerId: 22401,
    Time: "25 Dec 2021",
    Address: "29 Eve Street, 543 Evenue Road, Ny 87876",
    Amount: "$249.7",
    Payment: "Cash",
    Contact: "994-51-410-3130",
  },
  {
    id: 9178,
    customerId: 22401,
    Time: "25 Dec 2021",
    Address: "29 Eve Street, 543 Evenue Road, Ny 87876",
    Amount: "$249.7",
    Payment: "Cash",
    Contact: "994-51-410-3130",
  },
  {
    id: 9179,
    customerId: 22401,
    Time: "25 Dec 2021",
    Address: "29 Eve Street, 543 Evenue Road, Ny 87876",
    Amount: "$249.7",
    Payment: "Cash",
    Contact: "994-51-410-3130",
  },
  {
    id: 9200,
    customerId: 22401,
    Time: "25 Dec 2021",
    Address: "29 Eve Street, 543 Evenue Road, Ny 87876",
    Amount: "$249.7",
    Payment: "Cash",
    Contact: "994-51-410-3130",
  },
];

const adminOrders = () => {
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  function changeHidden() {
    setIsHiddenModal((prev) => !prev);
    // console.log(isHiddenModal);
  }

  return (
    <>
      <Head>
        <title>admin</title>
        <meta name="Products" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>
      <div className=" bg-textBlack min-h-screen px-4">
        <AdminHeader onClickButton={changeHidden} />

        <AdminLeftModal onClickClose={changeHidden} hidden={isHiddenModal} />
        <main className="flex">
          <div className=" hidden sm:block">
            <AdminAside />
          </div>

          <div className=" gap-4 hidden">
            <OrdersChart />
            <Barchart />
          </div>

          <section className=" w-full">
            <div className="m-5">
              <AdminSecondTitle name="Orders"  p1="Orders" />
            </div>

            {/* <div className=" w-full sm:w-auto m-5 flex flex-wrap gap-4 justify-center">
              {item.map((data) => (
                <AdminRestouransCard data={data} />
              ))}
            </div> */}
            <div className="p-5">
              <table className=" w-full bg-white ">
                <thead className="h-16  text-center text-sm not-italic font-semibold leading-6">
                  <tr>
                    <td>ID</td>
                    <td>Customer ID</td>
                    <td>Time</td>
                    <td>Delivery Address</td>
                    <td>Amount</td>
                    <td>Payment Method</td>
                    <td>Contact</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody className="">
                  {item.map((data) => (
                    <AdminOrdersTable data={data} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default adminOrders;
