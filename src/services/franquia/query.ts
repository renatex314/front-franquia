import { useQuery } from "@tanstack/react-query";
import { apiFranquia } from ".";

export const useQueryGetFranquiaByFranquiaId = (franquiaId: number) => useQuery(
  ['useQueryGetFranquiaByFranquiaId'],
  async () => (await apiFranquia.getFranquiaData(franquiaId)),
  {
    enabled: !!franquiaId
  }
);

const queryFranquia = {
  useQueryGetFranquiaByFranquiaId
}

export default queryFranquia;