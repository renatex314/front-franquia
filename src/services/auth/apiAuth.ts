import { api } from "@/core";
import {
  GetAlunoDataResponse,
  GetTokenByAlunoDataProps
} from "./types";

const getTokenByAlunoData = async (props: GetTokenByAlunoDataProps) =>
  (await api.post<string>("/login", props))?.data;

const getAlunoDataAuthenticated = async () =>
  (await api.get<GetAlunoDataResponse>("/api/me"))?.data;

export const apiAuth = {
  getTokenByAlunoData,
  getAlunoDataAuthenticated,
};
