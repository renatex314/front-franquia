import { api } from "@/core";
import {
  GetAlunoCoursesDataListResponse,
  GetAlunoRegisteredCoursesStatusProps,
  GetAlunoRegisteredCoursesStatusResponse,
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

const apiAluno = {
  getAlunoRegisteredCoursesStatus,
  getAlunoCoursesDataList,
};

export default apiAluno;
