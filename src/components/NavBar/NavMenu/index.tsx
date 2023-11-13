import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type MenusData = Array<{
  label: string;
  route: string;
}>;

interface NavMenuProps {
  className?: string;
  currentRoute: string;
  menusData: MenusData;
  onMenuClick?: (menuData: MenusData[number]) => void;
}
const NavMenu = ({
  className,
  currentRoute,
  menusData,
  onMenuClick,
}: NavMenuProps) => {
  const menusElements = useMemo(
    () =>
      menusData.map((menuData, i) => (
        <div
          className="group h-full capitalize flex justify-center items-center px-3 select-none cursor-pointer"
          key={i}
          onClick={() => onMenuClick && onMenuClick(menuData)}
        >
          <p
            data-iscurrentroute={currentRoute === menuData.route}
            className="relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-primary after:rounded-full group-hover:after:w-11/12 after:duration-100 data-[iscurrentroute=true]:after:w-11/12 data-[iscurrentroute=true]:after:bg-secondary"
          >
            {menuData.label}
          </p>
        </div>
      )),
    [currentRoute, menusData, onMenuClick]
  );

  return (
    <div
      className={twMerge("flex justify-start items-center h-full", className)}
    >
      {menusElements}
    </div>
  );
};

export default NavMenu;
