"use client";

import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col gap-4 mt-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        label="Email address"
        name="email"
        value={email}
        onChange={setEmail}
      />
      <Input
        label="Password"
        name="password"
        value={password}
        onChange={setPassword}
      />
      <a className="flex justify-end text-sm leading-6 font-semibold text-red-600 hover:text-red-500">
        Forgot Password
      </a>
      <Button type="submit" text="Sign In" />
    </form>
  );
};

export default LoginForm;
