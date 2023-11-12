export interface GetTokenByAlunoDataProps {
  alunoEmail: string;
  alunoSenha: string;
}

export interface AlunoDataResponse {
  alunoNome: string;
  alunoEndereco?: string;
  alunoTelefone?: string;
  alunoDataNascimento?: string;
  alunoCpf: string;
  alunoEmail: string;
  alunoFranquiaId: number;
}

export interface ProfessorDataResponse {
  professorNome: string;
  professorTelefone?: string;
  professorEmail: string;
  professorSenhaHash: string;
  professorCpf: string;
}

export interface GetUserDataResponse {
  role: "aluno" | "professor";
  userData: AlunoDataResponse | ProfessorDataResponse;
}
