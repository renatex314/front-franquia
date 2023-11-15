import { useQuery } from "@tanstack/react-query";
import { apiFranquia } from "./apiFranquia";

export const useQueryGetFranquiaByFranquiaId = (franquiaId: number) =>
  useQuery(
    ["useQueryGetFranquiaByFranquiaId"],
    async () => await apiFranquia.getFranquiaData(franquiaId),
    {
      enabled: !!franquiaId,
    }
  );
