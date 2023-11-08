"use client";

import Button from "../components/Button";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import BackgroundImage from "@/assets/background.png";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const LoginPage = () => {
  const router = useRouter();

  const redirectToAlunoLoginPage = useCallback(() => {
    router.push("/login/aluno");
  }, [router]);

  const redirectToProfessorLoginPage = useCallback(() => {
    router.push("/login/professor");
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={BackgroundImage.src}
        alt="background"
      />
      <div className="flex gap-10 absolute top-10 rounded-md bg-white p-10">
        <p className="text-xl">Global Speak</p>
        <p>imagem da global wizard</p>
      </div>
      <div className="rounded-md bg-white p-10">
        <p className="mb-10">Bem vindo a Global Speak !</p>
        <p className="mb-10">Eu sou:</p>
        <div className="flex justify-center items-center gap-10">
          <Button className="gap-3" onClick={redirectToAlunoLoginPage}>
            <PiStudentFill size="30px" />
            <p>Estudante</p>
          </Button>
          <Button className="gap-3" onClick={redirectToProfessorLoginPage}>
            <FaChalkboardTeacher size="30px" />
            <p>Professor</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
