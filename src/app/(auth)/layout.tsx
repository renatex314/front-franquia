import AuthProvider from "@/providers/AuthProvider";
import NavBar from "../../components/NavBar";
import WavesAnimatedBackground from "../../components/WavesAnimatedBackground";

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthProvider onDeauthRoute="/">
      <div className="h-full w-full overflow-hidden">
        <NavBar />
        {children}
        <WavesAnimatedBackground />
      </div>
    </AuthProvider>
  );
};

export default AuthLayout;
