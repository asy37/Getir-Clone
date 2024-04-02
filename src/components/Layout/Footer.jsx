import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import Menu from "../Pages/Menu";

export default function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className=" grid gap-x-8 pt-5 md:grid-cols-4 md:pt-10  xl:grid-cols-5">
        <div>
          <ol>
            <h4 className="pb-4 text-xl text-brand ">Getir'i indirin!</h4>
            <li className="pb-4">
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt="getir"
              />
            </li>
            <li className="pb-4">
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt="getir"
              />
            </li>
            <li className="pb-4">
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt="getir"
              />
            </li>
          </ol>
        </div>
        {menus.map((menu, index) => (
          <Menu key={index} {...menu} />
        ))}
        <div className="flex h-full w-full justify-end">
          <div className="flex h-28  w-24 items-center justify-end rounded-lg border  p-4 shadow-md xl:block">
            <img
              className="h-20 w-16 object-contain"
              src="https://cdn.getir.com/getirweb-images/common/etbis.png"
              alt="menu"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-y-4 border-t py-6 md:flex-row">
        <div className="flex flex-col items-center gap-x-8 gap-y-4 text-xs md:flex-row">
          <span className=" text-textfooter">© 2023 Getir</span>
          <ol className="list-disc text-brand">
            <li>
              <div>Bilgi Toplumu Hizmetleri</div>
            </li>
          </ol>
        </div>
        <div className="flex items-center  gap-x-8 text-xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-all ease-in-out hover:bg-hcolor hover:text-htext">
            <BsFacebook size={20} />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-all ease-in-out hover:bg-hcolor hover:text-htext">
            <BsInstagram size={20} />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-all ease-in-out hover:bg-hcolor hover:text-htext">
            <BsTwitter size={20} />
          </div>
        </div>
        <div className="flex h-8 w-[128px] items-center justify-center gap-x-2 rounded-lg border border-text px-2 transition-all ease-in-out hover:bg-hcolor hover:text-htext md:w-28">
          <BiGlobe size={20} /> Türkçe
        </div>
      </div>
    </div>
  );
}
