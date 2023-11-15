export interface GetAlunoRegisteredCoursesStatusProps {
  alunoId: number;
  year: number;
  month: number;
}

export interface GetAlunoRegisteredCoursesStatusItem {
  curso: {
    cursoId: number;
    cursoNome: string;
    cursoNivel: "iniciante" | "intermediario" | "avançado";
    cursoIdiomaId: number;
  };
  idioma: {
    idiomaId: number;
    idiomaNome: string;
  };
  franquiaCurso: {
    franquiaCursoId: number;
    franquiaCursoFranquiaId: number;
    franquiaCursoCursoId: number;
  };
  media: number;
}

export type GetAlunoRegisteredCoursesStatusResponse =
  Array<GetAlunoRegisteredCoursesStatusItem>;
