"use client";

import UserIcon from "@/components/UserIcon";
import { useAuthData } from "@/providers/AuthProvider";
import { AlunoDataResponse } from "@/services/auth/types";
import { useMemo } from "react";

const RootPage = () => {
  const authData = useAuthData();
  const userData = useMemo(() => {
    return authData.user?.userData as AlunoDataResponse;
  }, [authData.user?.userData]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-white p-5 rounded-md grow-0 w-[400px] mx-auto mt-10 mb-10">
        <div className="flex p-3 justify-start items-center gap-5">
          <UserIcon className="w-14 h-14 m-0" role="aluno" />
          <p className="text-lg">{userData?.alunoNome}</p>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
