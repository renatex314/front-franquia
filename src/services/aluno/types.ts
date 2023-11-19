export interface GetAlunoRegisteredCoursesStatusProps {
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
  matriculaId: number;
}

export interface GetAlunoCoursesDataListItem {
  matricula: {
    matriculaId: number;
    matriculaStatus: "ativa" | "inativa";
    matriculaData: string;
    matriculaAlunoId: number;
    matriculaCursoFranquiaId: number;
  };
  curso: {
    cursoId: number;
    cursoNome: string;
    cursoNivel: "iniciante" | "intermediario" | "avançado";
    cursoIdiomaId: number;
  };
  professores: Array<{
    professorId: number;
    professorNome: string;
    professorTelefone: string;
    professorEmail: string;
    professorSenhaHash: string;
    professorCpf: string;
  }>;
}

export interface GetAlunoSelectedCourseDataProps {
  matriculaId: number;
}

export type GetAlunoSelectedCourseDataResponse = {
  matricula: {
    matriculaId: number;
    matriculaStatus: "ativa" | "inativa";
    matriculaData: string;
    matriculaAlunoId: number;
    matriculaCursoFranquiaId: number;
  };
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
  avaliacoes: Array<{
    avaliacaoId: number;
    avaliacaoNota: number;
    avaliacaoDescricao: string;
    avaliacaoData: string;
    avaliacaoMatriculaId: string;
  }>;
  professores: Array<{
    professorId: number;
    professorNome: string;
    professorTelefone: string;
    professorEmail: string;
    professorSenhaHash: string;
    professorCpf: string;
  }>;
  pagamentos: Array<{
    pagamentoId: number;
    pagamentoValor: number;
    pagamentoData: string;
    pagamentoMetodo: "crédito" | "débito" | "boleto";
    pagamentoStatus: "pendente" | "pago" | "atrasado";
    pagamentoMatriculaId: number;
  }>;
};

export type GetAlunoRegisteredCoursesStatusResponse =
  Array<GetAlunoRegisteredCoursesStatusItem>;

export type GetAlunoCoursesDataListResponse =
  Array<GetAlunoCoursesDataListItem>;
