import { useRouter } from "next/router";
import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { signIn, signOut } from "next-auth/react";

const login: React.VFC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onclick: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    //メールかパスワードが空の時
    if (!email || !password) {
      //todo ポップアップを表示
      return;
    }

    signIn("credentials", {
      username: email,
      password: password,
      callbackUrl: "/hoge",
    });
  };

  return (
    <div className="flex min-h-full items-center justify-center">
      <label className="bg-red-500 text-2xl">email</label>
      <input
        data-testid="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <label>password</label>
      <input
        data-testid="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button data-testid="login" onClick={onclick}>
        login
      </button>
      <button data-testid="login" onClick={() => signOut()}>
        signout
      </button>
      <br />

      <Link href="/signin">
        <button>Signin?</button>
      </Link>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default login;
