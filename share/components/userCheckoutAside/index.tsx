import { useTranslation } from "react-i18next";

export const UserCheckoutAside = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full sm:w-[40%] flex flex-col justify-between px-3 sm:px-8 py-10 flex-wrap gap-0 sm:bg-whiteLight1">
      <p className="w-full text-center text-grayText1 font-medium text-xl">
        {t("userDesc3")}
      </p>
      <div className="flex flex-col mt-4 sm:mt-0 gap-6 max-h-72 pr-2 overflow-y-auto ">
        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>

        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>

        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>

        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>

        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>

        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>

        <div className="flex items-center text-grayText1 justify-between">
          <div className="flex items-center gap-1">
            <p className="text-grayText2 text-lg font-semibold">1</p>
            <p>x Papa John’s Pizza</p>
          </div>
          <p>$8.00</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 border-t-2 mt-2 pt-8 border-t-whiteLight2">
        <p className="font-semibold text-xl text-grayText2">{t("userCheck6")}</p>
        <p className="text-grayText1">$18.40</p>
      </div>
    </div>
  );
};
