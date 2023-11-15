import { useQuery } from "@tanstack/react-query";
import apiAluno from "./apiAluno";
import { GetAlunoRegisteredCoursesStatusProps } from "./types";

export const useQueryGetAlunoRegisteredCoursesStatus = (
  props: GetAlunoRegisteredCoursesStatusProps
) =>
  useQuery(
    ["useQueryGetAlunoRegisteredCoursesStatus"],
    async () => await apiAluno.getAlunoRegisteredCoursesStatus(props),
    {
      enabled: props && Object.values(props).every((value) => !!value),
    }
  );
