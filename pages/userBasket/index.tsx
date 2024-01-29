import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../../share/components/Footer";
import { Navbar } from "../../share/components/Navbar";
import { UserAside } from "../../share/components/userAside";
import { useTranslation } from "react-i18next";
import { UserBasketDetail } from "@/share/components/userBasketDetail";

const UserBasket: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Foody | User Basket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar isRegister={true} forAdmin={null} forLogin={null} />

        <section className="mx-0 sm:m-8 flex justify-center gap-10">
          <UserAside />
          <UserBasketDetail itemsCount={0} />
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default UserBasket;
