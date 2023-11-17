"use client";

import { useQueryGetAlunoCoursesDataList } from "@/services/aluno";
import CourseCard from "./CourseCard";
import { useMemo } from "react";

const CoursesPage = () => {
  const coursesList = useQueryGetAlunoCoursesDataList();

  const coursesCardElements = useMemo(
    () =>
      coursesList?.data?.map((courseData, i) => (
        <CourseCard
          key={i}
          courseName={courseData?.curso?.cursoNome}
          courseLevel={courseData?.curso?.cursoNivel}
          courseStatus={
            courseData?.matricula?.matriculaStatus === "ativa"
              ? "matriculado"
              : "desmatriculado"
          }
          teachersList={courseData?.professores?.map(
            (professorData) => professorData?.professorNome
          )}
        />
      )),
    [coursesList?.data]
  );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-[80%] overflow-hidden grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 m-10 mx-auto gap-3">
        {coursesCardElements}
      </div>
    </div>
  );
};

export default CoursesPage;
