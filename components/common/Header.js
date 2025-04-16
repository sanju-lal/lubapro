import { Popover } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import Drawer from "./Drawer";
import Logo from "../../public/assets/logo.jpg";

export default function HeaderV3() {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navList = [
    { title: "Home", linkTo: "/#home", activeLink: "/#home" },
    {
      title: "Products",
      linkTo: "/products",
      activeLink: "/products",
      subMenu: [
        {
          title: "Manufacturing management",
          linkTo: "products/manufacturing-management",
        },
        { title: "Retail management", linkTo: "products/retail-management" },
        { title: "Transport management", linkTo: "" },
      ],
    },
    {
      title: "Solutions",
      linkTo: "/solutions",
      activeLink: "",
      subMenu: [
        { title: "By Industry", linkTo: "" },
        { title: "Construction", linkTo: "" },
        { title: "Distribution", linkTo: "" },
        { title: "Manufacturing", linkTo: "/solutions/manufacturing" },
        { title: "Professional Services", linkTo: "" },
        { title: "Retail", linkTo: "" },
        { title: "Field Service", linkTo: "" },
        { title: "Other Industries", linkTo: "" },
      ],
    },
    { title: "Customer Stories", linkTo: "/", activeLink: "" },
    {
      title: "Services",
      linkTo: "/",
      activeLink: "",
      subMenu: [
        { title: "Implementation & Planning", linkTo: "" },
        { title: "FastTrack Deployment", linkTo: "" },
      ],
    },
    {
      title: "Support & Resources",
      linkTo: "/",
      subMenu: [
        {
          heading: "Support",
          items: [
            { title: "Support overview", linkTo: "" },
            { title: "Support programs", linkTo: "" },
          ],
        },
        {
          heading: "Resources",
          items: [{ title: "Blog", linkTo: "" }],
        },
      ],
    },
  ];

  const handleCloseMobileMenu = () => setMobileMenu(false);

  return (
    <nav className="w-full h-[74px] bg-[#F2F2F2] border-b-[1px] border-[#838383] flex justify-center items-center mb-6 px-6">
      <div className="w-full flex justify-between items-center relative px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={98}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-4 whitespace-nowrap">
            {navList.map((item, i) => (
              <NavItem item={item} key={i} />
            ))}
          </ul>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="w-8 h-8 xl:hidden absolute right-5 top-1/2 transform -translate-y-1/2">
          <MdMenu
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer isOpen={mobileMenu} setIsOpen={setMobileMenu}>
          <ul className="flex flex-col h-full gap-6">
            {navList.map((item, i) => (
              <NavItem
                item={item}
                key={i}
                handleCloseMobileMenu={handleCloseMobileMenu}
              />
            ))}
          </ul>
        </Drawer>
      </div>
    </nav>
  );
}

function NavItem({ item, handleCloseMobileMenu }) {
  const router = useRouter();
  const [popoverVisible, setPopoverVisible] = useState(false);

  const isGroupedMenu =
    Array.isArray(item?.subMenu) && item?.subMenu[0]?.heading;

  return (
    <li className="w-full lg:w-auto px-2 text-center">
      {item?.subMenu ? (
        <>
          {/* Mobile Submenu */}
          <div className="xl:hidden">
            <span
              onClick={() => {
                if (item.linkTo) {
                  router.push(item.linkTo);
                  handleCloseMobileMenu && handleCloseMobileMenu();
                } else {
                  setPopoverVisible(!popoverVisible);
                }
              }}
              className="p-3 text-[#838383] cursor-pointer hover:font-bold hover:text-orange-primary"
            >
              {item?.title}
            </span>
            <ul className="ml-4 mt-2 flex flex-col gap-2">
              {isGroupedMenu
                ? item.subMenu.map((group, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-sm">{group.heading}</h4>
                      {group.items.map((menu, j) => (
                        <li
                          key={j}
                          onClick={() => {
                            router.push(menu.linkTo);
                            handleCloseMobileMenu();
                          }}
                          className={`p-2 text-[#838383] cursor-pointer hover:font-bold hover:text-orange-primary${
                            router.pathname === menu.linkTo
                              ? " font-bold text-orange-primary"
                              : ""
                          }`}
                        >
                          {menu.title}
                        </li>
                      ))}
                    </div>
                  ))
                : item.subMenu.map((menu, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        router.push(menu.linkTo);
                        handleCloseMobileMenu();
                      }}
                      className={`p-2 text-[#838383] cursor-pointer hover:font-bold hover:text-orange-primary${
                        router.pathname === menu.linkTo
                          ? " font-bold text-orange-primary"
                          : ""
                      }`}
                    >
                      {menu.title}
                    </li>
                  ))}
            </ul>
          </div>

          {/* Desktop Popover */}
          <div className="hidden xl:block">
            <Popover
              content={
                <div className="flex flex-col min-w-[200px]">
                  {isGroupedMenu
                    ? item.subMenu.map((group, i) => (
                        <div key={i}>
                          <h4 className="font-semibold text-sm px-3 py-1">
                            {group.heading}
                          </h4>
                          {group.items.map((menu, j) => (
                            <span
                              key={j}
                              onClick={() => router.push(menu.linkTo)}
                              className={`p-3 text-[#838383] cursor-pointer block hover:font-bold hover:text-orange-primary${
                                router.pathname === menu.linkTo
                                  ? " font-bold text-orange-primary"
                                  : ""
                              }`}
                            >
                              {menu.title}
                            </span>
                          ))}
                        </div>
                      ))
                    : item.subMenu.map((menu, i) => (
                        <span
                          key={i}
                          onClick={() => router.push(menu.linkTo)}
                          className={`p-3 text-[#838383] cursor-pointer block hover:font-bold hover:text-orange-primary${
                            router.pathname === menu.linkTo
                              ? " font-bold text-orange-primary"
                              : ""
                          }`}
                        >
                          {menu.title}
                        </span>
                      ))}
                </div>
              }
              title=""
              visible={popoverVisible}
              onVisibleChange={(visible) => setPopoverVisible(visible)}
            >
              <div className="relative">
                <Link href={item.linkTo}>
                  <span
                    className={`p-3 text-[#838383] cursor-pointer hover:font-bold hover:text-orange-primary${
                      router.pathname === item.activeLink
                        ? " font-bold text-orange-primary"
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </Link>
              </div>
            </Popover>
          </div>
        </>
      ) : (
        <span
          onClick={() => {
            router.push(item.linkTo);
            handleCloseMobileMenu && handleCloseMobileMenu();
          }}
          className={`p-3 text-[#838383] cursor-pointer hover:font-bold hover:text-orange-primary${
            router.pathname === item.activeLink
              ? " font-bold text-orange-primary"
              : ""
          }`}
        >
          {item.title}
        </span>
      )}
    </li>
  );
}
