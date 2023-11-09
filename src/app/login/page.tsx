"use client";

import Button from "../components/Button";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import BackgroundImage from "@/assets/background.png";
import LogoImage from "@/assets/logo_low.png";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import AnimatedBackground from "../components/AnimatedBackground";

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
      <AnimatedBackground />
      <div className="flex w-[400px] justify-around items-center absolute top-10 rounded-md bg-white p-5 select-none">
        <p className="text-xl">Global Speaking</p>
        <img
          className="w-32 h-32"
          src={LogoImage.src}
          alt="Global Speaking Logo"
        />
      </div>
      <div className="rounded-md bg-white p-10">
        <p className="mb-10">Bem vindo a Global Speaking !</p>
        <p className="mb-10">Você é:</p>
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
