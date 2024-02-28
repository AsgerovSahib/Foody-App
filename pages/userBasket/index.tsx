import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../share/components/Footer";
import { Navbar } from "../../share/components/Navbar";
import { UserAside } from "../../share/components/userAside";
import { useTranslation } from "react-i18next";
import { UserBasketDetail } from "@/share/components/userBasketDetail";
import { getProductForBasket } from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const UserBasket: NextPage = () => {
  const { t } = useTranslation();
  const { basketData, setBasketData } = useGlobalStore();
  async function renderBasketProducts() {
    const res = await getProductForBasket();
    console.log(res);
    setBasketData(res?.data.result.data);
  }
  useEffect(() => {
    renderBasketProducts();
  }, []);
  console.log(basketData);
  

  return (
    <>
      <Head>
        <title>Foody | User Basket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar/>
<ToastContainer/>
        <section className="mx-0 sm:m-8 flex justify-center gap-10">
          
          <UserAside />
          <UserBasketDetail data={basketData} itemsCount={basketData?.total_item} />
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default UserBasket;
