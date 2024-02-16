// RestaurantDetail.tsx
import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../../share/components/Navbar";
import { Footer } from "../../../share/components/Footer";
import { RestDetailHeader } from "../../../share/components/restaurantDetailHeader";
import { RestDetailProductReact } from "../../../share/components/restaurantDetailProductCard";
import { RestDetailBasket } from "@/share/components/restaurantDetailBasket";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProducts, getRestourans } from "@/share/services/axios";

interface RestaurantDetailProps {
  name?: any;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ name }) => {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  const [lokal, setLokal] = useState<any>([]);
  const [product, setProducts] = useState<any[]>([]);

  let localPath = asPath.split("/")[2];

  useEffect(() => {
    RenderRestouran();
  }, []);

  async function RenderRestouran() {
    const res = await getRestourans();
    let resArrs = res?.data.result.data;

    let focusRes = resArrs.filter(function (item: any) {
      return item.id == localPath;
    });
    setLokal(focusRes);

    return;
  }

  async function RenderProduct() {
    const res = await getProducts();
    let resArr = res?.data.result.data;

    let focusProduct = resArr.filter(
      (item: any) => item.rest_id == lokal[0]?.name
    );
    console.log(focusProduct, "focusProduct-----------");
    setProducts(focusProduct);
  }

  useEffect(() => {
    RenderProduct();
  }, [lokal]);

  return (
    <>
      <Head>
        <title>Foody | Restaurant Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar />

        <section className="mx-0 sm:m-8 p-2 sm:p-0 flex flex-col">
          <RestDetailHeader lokal={lokal} />
          <section className="flex flex-col sm:flex-row justify-between gap-5 mt-8">
            {/* PRODUCT */}
            <div className=" bg-whiteLight1 w-full sm:w-3/5">
              <p className="text-center text-3xl text-grayText2 font-semibold my-8">
                {t("detailDesc3")}
              </p>
              <div className="max-h-[432px] overflow-y-auto">
                {product?.map((item: any) => (
                  <RestDetailProductReact
                    key={item.id}
                    lokal={lokal}
                    name={item.name}
                    desc={item.description}
                    price={item.price}
                    imageSrc={item.img_url}
                  />
                ))}
              </div>
            </div>
            {/* BASKET */}
            <div className="flex flex-col bg-whiteLight1 p-4 w-full sm:w-2/5">
              <RestDetailBasket itemCount={0} />
            </div>
          </section>
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default RestaurantDetail;
