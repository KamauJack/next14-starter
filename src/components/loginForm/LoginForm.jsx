"use client";

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/libs/actions";
import { Link } from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter;
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={login}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login with Credentials</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account"}
        <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
