import Image from "next/image";
import LogoHighImage from "@/assets/logo_high.png";
import LogoLowImage from "@/assets/logo_low.png";
import { twMerge } from "tailwind-merge";

interface AppIconProps {
  className?: string;
  res?: "low" | "high";
}
const AppIcon = ({ className, res = "low" }: AppIconProps) => {
  return (
    <div
      className={twMerge(
        "flex justify-center items-center h-28 w-28 rounded-full bg-white",
        className
      )}
    >
      <Image
        className="w-full h-full text-center object-contain"
        src={res === "low" ? LogoLowImage : LogoHighImage}
        alt="Global Speaking Logo"
      />
    </div>
  );
};

export default AppIcon;
