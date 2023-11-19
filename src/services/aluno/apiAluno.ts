import { api } from "@/core";
import {
  GetAlunoCoursesDataListResponse,
  GetAlunoRegisteredCoursesStatusProps,
  GetAlunoRegisteredCoursesStatusResponse,
  GetAlunoSelectedCourseDataProps,
  GetAlunoSelectedCourseDataResponse,
} from "./types";

const getAlunoRegisteredCoursesStatus = async ({
  year,
  month,
}: GetAlunoRegisteredCoursesStatusProps) =>
  (
    await api.get<GetAlunoRegisteredCoursesStatusResponse>(
      "/api/aluno/notas/desempenho",
      {
        params: {
          year,
          month,
        },
      }
    )
  )?.data;

const getAlunoCoursesDataList = async () =>
  (await api.get<GetAlunoCoursesDataListResponse>("/api/aluno/cursos/list"))
    ?.data;

const getAlunoSelectedCourseData = async ({
  matriculaId,
}: GetAlunoSelectedCourseDataProps) =>
  (
    await api.get<GetAlunoSelectedCourseDataResponse>(
      `/api/aluno/cursos/${matriculaId}`
    )
  )?.data;

const apiAluno = {
  getAlunoRegisteredCoursesStatus,
  getAlunoCoursesDataList,
  getAlunoSelectedCourseData,
};

export default apiAluno;
