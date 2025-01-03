"use client";

import { useState } from "react";

import BuyResourceIcon from "@/assets/svg/game/tabs/resources/buy-resource-button.svg";

import AquaSmall from "@/assets/svg/game/resource-icons/aqua/aqua-small.svg";
import PlantSmall from "@/assets/svg/game/resource-icons/plant/plant-small.svg";
import ElectroSmall from "@/assets/svg/game/resource-icons/electro/electro-small.svg";
import SunSmall from "@/assets/svg/game/resource-icons/sun/sun-small.svg";

const BuyResource = () => {
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  return (
    <>
      <button
        className="active:opacity-40"
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setMenuHidden(!menuHidden);
        }}
      >
        <BuyResourceIcon />
      </button>
      <div
        className={`${menuHidden ? "hidden" : ""} absolute left-0 top-0 z-50 flex size-full items-start`}
      >
        <div className="h-1/2 w-full items-center justify-center border-[1px] border-white bg-black">
          <div className="mx-auto mt-2 flex size-fit gap-4 border-[3px] border-white px-2 py-1">
            <button className="h-[26px] w-[26px]">
              <PlantSmall />
            </button>
            <button className="h-[26px] w-[26px]">
              <AquaSmall />
            </button>
            <button className="h-[26px] w-[26px]">
              <ElectroSmall />
            </button>
            <button className="h-[26px] w-[26px]">
              <SunSmall />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyResource;
