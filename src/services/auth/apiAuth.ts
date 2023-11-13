import { api } from "@/core";
import { GetUserDataResponse, GetTokenByAlunoDataProps } from "./types";

const getTokenByAlunoData = async (props: GetTokenByAlunoDataProps) =>
  (await api.post<string>("/login/aluno", props))?.data;

const getUserDataAuthenticated = async () =>
  (await api.get<GetUserDataResponse>("/api/me"))?.data;

export const apiAuth = {
  getTokenByAlunoData,
  getUserDataAuthenticated,
};
