import { api } from "@/core"
import { Franquia } from "./types";

const getFranquiaData = async (franquiaId: number) => (await api.get<Franquia>(`/franquia/${franquiaId}`))?.data;

export const apiFranquia = {
  getFranquiaData
}