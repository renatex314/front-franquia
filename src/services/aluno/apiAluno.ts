import { api } from "@/core";
import {
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

const apiAluno = {
  getAlunoRegisteredCoursesStatus,
};

export default apiAluno;
