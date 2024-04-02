import { NavLink, useLocation } from "react-router-dom";
import sidebar from "../../api/sidebar.json";
import clsx from "clsx";
import { useState } from "react";

export const Sidebar = () => {
  const location = useLocation();

  const [subMenus, setSubMenus] = useState(Array(sidebar.length).fill(false));

  const handleSubMenuToggle = (index) => {
    setSubMenus((prevSubMenus) => {
      const updatedSubMenus = [...prevSubMenus];
      updatedSubMenus[index] = !updatedSubMenus[index];

      // Diğer menülerin durumunu kapat
      for (let i = 0; i < updatedSubMenus.length; i++) {
        if (i !== index) {
          updatedSubMenus[i] = false;
        }
      }

      return updatedSubMenus;
    });
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-boldcolor">Kategoriler</label>
      <div className="shadow-[0px 6px 16px rgba(93, 62, 188, 0.04)] h-fit w-[240px] rounded-lg bg-white py-1">
        {sidebar.map((menu, i) => {
          const { title, image, path, sub } = menu ?? {};
          return (
            <>
              <NavLink to={path} key={i}>
                <div
                  onClick={() => handleSubMenuToggle(i)}
                  className={clsx("flex h-10 w-full items-center justify-between gap-2 px-3 py-1", {
                    "bg-brand/10": location.pathname === path,
                  })}>
                  <div className="flex items-center justify-center">
                    <div className="border-footertext h-8 w-8 rounded border">
                      <img src={image} alt={title} />
                    </div>
                    <label className="cursor-pointer text-sm font-bold text-boldcolor">{title}</label>
                  </div>
                  <span className={clsx("", { "rotate-90 duration-100": location.pathname === path })}>
                    <svg height="18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                          fill="#4c3398"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </NavLink>
              {subMenus[i] && (
                <div className="ml-6">
                  {sub.map((item, index) => (
                    <NavLink to={item.path} key={index}>
                      <div className="flex items-center gap-2 px-3 py-1">
                        <label className="cursor-pointer text-sm font-bold text-boldcolor">{item.title}</label>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
