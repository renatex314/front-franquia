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
    <div className="flex flex-col w-full h-full items-center pt-10">
      <Card>teste</Card>
    </div>
  );
};

export default SelectedCoursePage;
