"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

const SelectedCoursePage = ({
  params,
}: {
  params: { matriculaId: number };
}) => {
  const router = useRouter();

  const selectedMatriculaId = useMemo(
    () => Number(params?.matriculaId),
    [params?.matriculaId]
  );

  useEffect(() => {
    if (Number.isNaN(selectedMatriculaId)) {
      router.push("/student/courses");
    }
  }, [router, selectedMatriculaId]);

  return (
    <div className="flex flex-col w-full h-full items-center pt-10 gap-3">
      <Card className="flex flex-col w-[50%] gap-1">
        <div className="flex items-center">
          <p>Curso de Inglês</p>
          <p className="mx-2">-</p>
          <p className="mr-auto">Inglês</p>
          <div className="w-3 h-3 rounded-full shrink-0 grow-0 bg-green-500"></div>
          <p className="ml-3">Matrícula ativa</p>
        </div>
        <div className="flex text-gray-400 gap-3">
          <p>iniciante</p>
          <p className="ml-auto">Matriculado desde 03/11/2022</p>
        </div>
      </Card>
      <Card className="w-[50%]">teste de card</Card>
    </div>
  );
};

export default SelectedCoursePage;
