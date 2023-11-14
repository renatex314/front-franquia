"use client";

import { useAuthData } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

interface StudentLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}
const StudentLayout = ({ children }: StudentLayoutProps) => {
  const authData = useAuthData();
  const router = useRouter();

  if (authData.user?.role === "professor") {
    router.push("/teacher");
    return;
  }

  return <>{children}</>;
};

export default StudentLayout;
