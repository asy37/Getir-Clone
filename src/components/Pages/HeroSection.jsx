import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { useWindowWidth } from "@react-hook/window-size";

export default function HeroSection() {
  const windowWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [selected, setSelected] = useState("TR");
  return (
    <div className="before:-h-full relative h-auto before:absolute before:inset-0 before:z-10 before:w-full before:bg-gradient-to-r before:from-primary before:to-transparent md:h-[500px]">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="h-[500px] w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
              alt="Hero"
            />
          </div>
          <div>
            <img
              className="h-[500px] w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
              alt="Hero"
            />
          </div>
          <div>
            <img
              className="h-[500px] w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
              alt="Hero"
            />
          </div>
          <div>
            <img
              className="h-[500px] w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
              alt="Hero"
            />
          </div>
        </Slider>
      )}
      <div className="relative top-0 z-20 flex h-full w-auto items-center justify-between md:container md:absolute md:left-1/2 md:-translate-x-1/2">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="Logo" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda{" "}
          </h3>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center gap-y-4 bg-gray-50 md:w-[400px] md:rounded-lg">
          <h4 className="mt-4 font-semibold text-primary">Giriş yap veya kayıt ol</h4>
          <div className="flex justify-between gap-x-2">
            <ReactFlagsSelect
              className="flag-select"
              countries={["US", "GB", "FR", "DE", "IT", "TR"]}
              customLabels={{ US: "+50", GB: "+20", FR: "+80", DE: "10", IT: "+77", TR: "+90" }}
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
            <label className="relative block flex-1">
              <input
                required
                className=" peer h-[44px] rounded border-2 border-gray-200  px-4 pt-2 text-sm outline-none transition-colors hover:border-primary focus:border-primary"
              />
              <span className="transition-color pointer-events-none absolute left-0 top-0 flex  h-full items-center px-4  text-graay duration-300 peer-valid:h-7 peer-valid:text-xs peer-valid:text-brand peer-focus:h-7 peer-focus:text-xs peer-focus:text-brand">
                Telefon Numarası
              </span>
            </label>
          </div>
          <div className="mb-4 ">
            <button className="flex  h-12 items-center justify-center rounded-md bg-brandyellow px-14 py-3.5 text-sm font-semibold text-brand duration-300 hover:bg-brand hover:text-brandyellow">
              Telefon numarası ile devam et
            </button>
            <hr className="my-2 h-[1px] w-full bg-gray-300" />
            <button className="flex  h-12 w-full items-center rounded-md bg-blue-100 px-4  py-3.5 text-sm font-semibold text-blue-400 duration-300">
              <BsFacebook size={24} />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
