"use client";

import UserIcon from "@/components/UserIcon";
import { useAuthData } from "@/providers/AuthProvider";
import { AlunoDataResponse } from "@/services/auth/types";
import { useQueryGetFranquiaByFranquiaId } from "@/services/franquia";
import { Skeleton } from "@mui/material";
import { useMemo } from "react";

const RootPage = () => {
  const authData = useAuthData();
  const userData = useMemo(() => {
    return authData.user?.userData as AlunoDataResponse;
  }, [authData.user?.userData]);

  const { data: franquia, isLoading: isFranquiaDataLoading } =
    useQueryGetFranquiaByFranquiaId(userData?.alunoFranquiaId);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-white p-5 rounded-md grow-0 w-[50%] mx-auto mt-10 mb-10">
        <div className="flex p-3 justify-start items-center gap-5">
          <UserIcon className="w-14 h-14 m-0 shrink-0" role="aluno" />
          <div className="flex flex-col grow">
            {!!userData?.alunoNome ? (
              <p className="text-lg">{userData?.alunoNome}</p>
            ) : (
              <Skeleton className="w-full" height={40} />
            )}
            {isFranquiaDataLoading ? (
              <Skeleton className="w-full" height={40} />
            ) : (
              <p className="text-sm text-gray-400">
                Matriculado(a) na franquia &quot;{franquia?.franquiaNome}&quot;
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
