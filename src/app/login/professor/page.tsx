"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Button from "@/components/Button";
import { authorization } from "@/core";
import { useFeedback } from "@/providers/FeedbackProvider";
import services from "@/services";
import { GetTokenByAlunoDataProps } from "@/services/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodIssueCode, z } from "zod";
import AppIcon from "../../../components/AppIcon";

const loginFormSchema = z
  .object({
    professorEmail: z.string(),
    professorSenha: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.professorEmail === "" || !data.professorEmail) {
      ctx.addIssue({
        message: "Você precisa informar o E-mail",
        code: ZodIssueCode.custom,
        path: ["professorEmail"],
      });
    }

    if (data.professorSenha === "" || !data.professorSenha) {
      ctx.addIssue({
        message: "Você precisa informar a Senha",
        code: ZodIssueCode.custom,
        path: ["professorSenha"],
      });
    }
  });
type FormSchemaType = z.infer<typeof loginFormSchema>;

const ProfessorLoginPage = () => {
  const router = useRouter();
  const feedback = useFeedback();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      professorEmail: "",
      professorSenha: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async (props: GetTokenByAlunoDataProps) =>
      await services.auth.getTokenByAlunoData(props),
    onSuccess: (token) => {
      authorization.saveAccessToken(token);

      feedback({
        message: "Seja bem-vindo !",
        type: "success",
      });
    },
    onError: (error: AxiosError<string>) => {
      const errorMessage = error?.response?.data?.toString();

      if (errorMessage) {
        feedback({
          message: errorMessage,
          type: "error",
        });
      }
    },
  });

  const onSubmitHandler = useCallback((formData: FormSchemaType) => {
    // mutate(formData);
  }, []);

  useEffect(() => {
    authorization.setOnNetworkError(() => {
      feedback({
        message: "Erro de conexão",
        type: "error",
      });
    });

    authorization.setOnUpdateAccessToken(() => {
      const accessToken = authorization.getAccessToken();

      if (accessToken) {
        router.push("/");
      }
    });
  }, [feedback, router]);

  return (
    <div className="flex h-full w-full p-5">
      <AnimatedBackground />
      <div className="ml-auto flex h-full w-[400px] grow-0 flex-col items-center rounded-xl bg-white shadow-md">
        <AppIcon className="mt-[20%]" />
        <p className="mt-8">Faça o login para poder prosseguir</p>
        <form
          className="my-auto gap-5 flex flex-col w-[80%] mx-auto grow pt-10"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <TextField
            {...register("professorEmail")}
            variant="outlined"
            label="E-mail"
            type="email"
            error={!!errors?.professorEmail?.message}
            helperText={errors?.professorEmail?.message}
          />
          <TextField
            {...register("professorSenha")}
            variant="outlined"
            label="Senha"
            type="password"
            error={!!errors?.professorSenha?.message}
            helperText={errors?.professorSenha?.message}
          />
          <Button type="submit" loading={isLoading}>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfessorLoginPage;
