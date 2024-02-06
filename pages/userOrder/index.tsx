import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../../share/components/Footer";
import { Navbar } from "../../share/components/Navbar";
import { Table } from "../../share/components/orderTable/index";
import { useTranslation } from "react-i18next";
import { UserAside } from "../../share/components/userAside";

const UserOrder: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Foody | User Order</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar />

        <section className="mx-0 sm:m-8 flex justify-center gap-10">
          <UserAside />

          <div className="w-full flex  flex-col justify-between px-8 py-10 flex-wrap gap-x-1 gap-y-8 sm:bg-whiteLight1">
            <h2 className=" font-semibold text-3xl text-grayText2">
              {t("userDesc3")}
            </h2>

            {/* TABLE */}
            <Table />
            {/* TABLE END */}

            <div className="flex w-max items-center justify-center gap-2">
              <button className="bg-white rounded-md border-2 border-mainRedLight hover:scale-95">
                <Image
                  width={25}
                  height={0}
                  src={"beforeArrow.svg"}
                  alt="arrow"
                />
              </button>
              <p className="p-1 px-3 bg-white font-medium border-2 text-grayText2 border-mainRedLight rounded-md">
                1
              </p>
              <p className=" text-grayText1 font-medium">03</p>
              <button className="bg-white rounded-md border-2 border-mainRedLight hover:scale-95">
                <Image
                  width={25}
                  height={0}
                  src={"nextArrow.svg"}
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default UserOrder;
