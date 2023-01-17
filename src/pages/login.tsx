import { useRouter } from "next/router";
import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

const login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.replace("/hoge");
  }

  const signin: MouseEventHandler<HTMLButtonElement> = (e): void => {
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
    // <div className="flex min-h-full items-center justify-center my-">
    //   <label className="bg-red-500 text-2xl">email</label>
    //   <input
    //     data-testid="email"
    //     onChange={(e) => setEmail(e.target.value)}
    //   ></input>
    //   <br />
    //   <label>password</label>
    //   <input
    //     data-testid="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //   ></input>
    //   <br />
    //   <button data-testid="login" onClick={onclick}>
    //     login
    //   </button>
    //   <button data-testid="login" onClick={() => signOut()}>
    //     signout
    //   </button>
    //   <br />

    //   <Link href="/signin">
    //     <button>Signin?</button>
    //   </Link>
    //   <Link href="/">
    //     <button>Home</button>
    //   </Link>

    // </div>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-1000 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={signin}
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default login;
