import { api } from "@/core";
import {
  GetAlunoCoursesDataListResponse,
  GetAlunoPaymentsListResponse,
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

const getAlunoPaymentsList = async () =>
  (await api.get<GetAlunoPaymentsListResponse>("/api/aluno/pagamentos/list"))
    ?.data;

const apiAluno = {
  getAlunoRegisteredCoursesStatus,
  getAlunoCoursesDataList,
  getAlunoSelectedCourseData,
  getAlunoPaymentsList,
};

export default apiAluno;
