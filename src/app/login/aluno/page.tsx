"use client";

import Button from "@/app/components/Button";
import BackgroundImage from "@/assets/background.png";
import { authorization } from "@/core";
import { useFeedback } from "@/providers/FeedbackProvider";
import services from "@/services";
import { GetTokenByAlunoDataProps } from "@/services/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodIssueCode, z } from "zod";
import AppIcon from "../../components/AppIcon";

const loginFormSchema = z
  .object({
    alunoEmail: z.string(),
    alunoSenha: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.alunoEmail === "" || !data.alunoEmail) {
      ctx.addIssue({
        message: "Você precisa informar o E-mail",
        code: ZodIssueCode.custom,
        path: ["alunoEmail"],
      });
    }

    if (data.alunoSenha === "" || !data.alunoSenha) {
      ctx.addIssue({
        message: "Você precisa informar a Senha",
        code: ZodIssueCode.custom,
        path: ["alunoSenha"],
      });
    }
  });
type FormSchemaType = z.infer<typeof loginFormSchema>;

const LoginPage = () => {
  const router = useRouter();
  const feedback = useFeedback();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      alunoEmail: "",
      alunoSenha: "",
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

  const onSubmitHandler = useCallback(
    (formData: FormSchemaType) => {
      mutate(formData);
    },
    [mutate]
  );

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
      <Image
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover object-left-bottom"
        src={BackgroundImage}
        alt=""
      />
      <div className="h-fit rounded-md bg-blue-500 text-white drop-shadow-2xl shadow-2xl shadow-blue-500 p-12 text-4xl font-medium">
        Bem vindo a GlobalSpeak !
      </div>
      <div className="ml-auto flex h-full w-[400px] grow-0 flex-col items-center rounded-xl bg-white shadow-md">
        <AppIcon className="mt-[20%]" />
        <p className="mt-8">Faça o login para poder prosseguir</p>
        {/* <p className="text-xs text-center">
          Não possui uma conta ?{" "}
          <Link className="text-blue-700 underline" href={"/register"}>
            clique aqui para se registrar
          </Link>
        </p> */}
        <form
          className="my-auto gap-5 flex flex-col w-[80%] mx-auto grow pt-10"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <TextField
            {...register("alunoEmail")}
            variant="outlined"
            label="E-mail"
            type="email"
            error={!!errors?.alunoEmail?.message}
            helperText={errors?.alunoEmail?.message}
          />
          <TextField
            {...register("alunoSenha")}
            variant="outlined"
            label="Senha"
            type="password"
            error={!!errors?.alunoSenha?.message}
            helperText={errors?.alunoSenha?.message}
          />
          <Button type="submit" loading={isLoading}>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
