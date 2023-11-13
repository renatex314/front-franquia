import { Roboto } from "next/font/google";
import "./styles.css";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const AnimatedBackground = () => {
  return (
    <div className="root">
      <p
        className={twMerge(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-opacity-10 uppercase text-lg font-bold",
          roboto.className
        )}
      >
        global speaking
      </p>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
