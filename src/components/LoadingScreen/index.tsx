import { CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <div className="fixed flex justify-center items-center bg-white bg-opacity-70 backdrop-blur-md !top-0 !left-0 !w-full !h-full pointer-events-auto z-[999999999999]">
      <CircularProgress size={'50px'} />
    </div>
  );
};

export default LoadingScreen;
