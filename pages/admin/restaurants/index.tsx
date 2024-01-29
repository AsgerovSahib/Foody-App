import Barchart from "@/share/components/LineChart";
import { AdminAside } from "@/share/components/adminAside";
import AdminCard from "@/share/components/adminCard";
import { AdminHeader } from "@/share/components/adminHeader";
import { AdminLeftModal } from "@/share/components/adminLeftModal";
import AdminRestouransCard from "@/share/components/adminRestouransCard";
import AdminSecondTitle from "@/share/components/adminSecondTitle";
import OrdersChart from "@/share/components/ordersChart";
import Head from "next/head";
import React, { useState } from "react";

const restourans = () => {
  const item = [
    {
      name1: "Papa John’s",
      name2: "Pizza",
      image: "/adminRestouransPapaJons.svg",
    },
    {
      name1: "Burger King",
      name2: "Pizza",
      image: "/adminRestouransBurgerKing.svg",
    },
    {
      name1: "Papa John’s",
      name2: "Pizza",
      image: "/adminRestouransPapaJons.svg",
    },
    {
      name1: "Burger King",
      name2: "Pizza",
      image: "/adminRestouransBurgerKing.svg",
    },
    {
      name1: "Papa John’s",
      name2: "Pizza",
      image: "/adminRestouransPapaJons.svg",
    },
    {
      name1: "Burger King",
      name2: "Pizza",
      image: "/adminRestouransBurgerKing.svg",
    },
    {
      name1: "Papa John’s",
      name2: "Pizza",
      image: "/adminRestouransPapaJons.svg",
    },
    {
      name1: "Burger King",
      name2: "Pizza",
      image: "/adminRestouransBurgerKing.svg",
    },
  ];

  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  function changeHidden() {
    setIsHiddenModal((prev) => !prev);
    console.log(isHiddenModal);
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

          <section>
            <div className="m-5">
              <AdminSecondTitle name="Restaurants" />
            </div>

            <div className=" w-full sm:w-auto m-5 flex flex-wrap gap-4 justify-center">
              {item.map((data) => (
                <AdminRestouransCard data={data} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default restourans;
