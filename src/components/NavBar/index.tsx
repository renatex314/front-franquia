"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import AccountSection from "./AccountSection";
import AppLogo from "./AppLogo";
import NavMenu, { MenusData } from "./NavMenu";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const availableMenus: MenusData = useMemo(() => {
    return [
      {
        label: "meus cursos",
        route: "/student",
      },
      {
        label: "pagamentos",
        route: "/student/payments",
      },
      {
        label: "sobre nós",
        route: "/about",
      },
    ];
  }, []);

  const onMenuClick = useCallback(
    (menuData: MenusData[number]) => {
      router.push(menuData.route);
    },
    [router]
  );

  return (
    <div className="flex bg-white h-20 w-full shadow-sm border-b sticky top-0 px-16 z-50">
      <AppLogo />
      <NavMenu
        className="ml-auto"
        currentRoute={pathname}
        menusData={availableMenus}
        onMenuClick={onMenuClick}
      />
      <div className="rounded-full ml-5 mr-10 my-auto h-[70%] w-[1px] bg-black bg-opacity-25"></div>
      <AccountSection />
    </div>
  );
};

export default NavBar;
