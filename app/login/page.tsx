import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";
import { brandThemes, getActiveBrand } from "@/utils/brands";

const Login = () => {
  const activeBrand = getActiveBrand();
  const theme = brandThemes[activeBrand];

  return (
    <main className="flex flex-1 min-h-screen mx-20">
      {/* Left hand column */}
      <div className="flex flex-1 flex-col justify-center px-2 py-16 sm:px-6 lg:flex-none xl:px-16">
        <div className="flex min-h-screen flex-col items-center justify-between">
          <LoginForm />
        </div>
      </div>
      {/* Right column */}
      <div className="flex flex-1">
        <Image
          width={400}
          height={300}
          objectFit="cover"
          src={theme.loginBg}
          alt={`${theme.name} Login Background`}
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
};

export default Login;
