export interface GetTokenByAlunoDataProps {
  alunoEmail: string;
  alunoSenha: string;
}

export interface GetAlunoDataResponse {
  alunoNome: string;
  alunoEndereco?: string;
  alunoTelefone?: string;
  alunoDataNascimento?: string;
  alunoCpf: string;
  alunoEmail: string;
  alunoFranquiaId: number;
}
