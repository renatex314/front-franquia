import Image from "next/image";
import LogoImage from "@/assets/logo_low.png";
import { twMerge } from "tailwind-merge";

interface AppIconProps {
  className: string;
}
const AppIcon = ({ className }: AppIconProps) => {
  return (
    <div
      className={twMerge(
        "flex justify-center items-center h-28 w-28 rounded-full bg-white",
        className
      )}
    >
      <Image
        className="w-full h-full text-center object-contain"
        src={LogoImage}
        alt="Global Speaking Logo"
      />
    </div>
  );
};

export default AppIcon;
