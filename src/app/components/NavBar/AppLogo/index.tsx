import Link from "next/link";
import AppIcon from "../../AppIcon";
import { Roboto } from "next/font/google";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const AppLogo = () => {
  return (
    <Link className="flex h-full items-center gap-3" href={"/"}>
      <AppIcon className="w-14 h-14 my-auto ml-2" />
      <p
        className={twMerge(
          "text-[#dd0b4a] font-extrabold text-xl select-none uppercase",
          roboto.className
        )}
      >
        Global
      </p>
      <p
        className={twMerge(
          "text-blue-500 font-extrabold text-xl select-none -ml-2 uppercase",
          roboto.className
        )}
      >
        Speaking
      </p>
    </Link>
  );
};

export default AppLogo;
