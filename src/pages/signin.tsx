import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { graphql } from "../graphql/__generated__";
import { useRouter } from "next/router";
import Link from "next/link";

const SIGNIN = graphql(`
  mutation sigin($email: String!, $password: String!, $name: String!) {
    signinUser(email: $email, password: $password, name: $name) {
      sessionId
      name
      signined
    }
  }
`);
const login = (): JSX.Element => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [checkMark, setCheckMark] = useState("");
  const [styleEmail, setStyleEmail] = useState({
    borderColor: "initial",
  });
  const [stylePassword, setStylePassword] = useState({
    borderColor: "unset",
  });
  const [signinUser, { data, loading, error }] = useMutation(SIGNIN, {
    onCompleted({ signinUser }) {
      if (signinUser.signined) {
        router.push("/");
      } else {
        setEmailMsg("※こちらのメールアドレスはすでに登録されています。");
        setStyleEmail({
          borderColor: "red",
        });
      }
    },
  });

  const judgePassword = (): boolean => {
    if (password.match(/[0-9a-zA-Z]*/) && password.length >= 8) {
      setStylePassword({
        borderColor: "initial",
      });
      setPasswordMsg("");
      setCheckMark("☑");
      return true;
    } else {
      setStylePassword({
        borderColor: "red",
      });
      setCheckMark("☒");
      setPasswordMsg(
        "※パスワードは8文字以上のアルファベット数字のみで入力してください"
      );
      return false;
    }
  };

  const onclick = async () => {
    //メールかパスワードが空の時
    if (!nickname || !email || !password) {
      //todo ポップアップを表示
      return;
    }
    if (!judgePassword()) return;

    signinUser({
      variables: {
        email: email,
        password: password,
        name: nickname,
      },
    });
  };

  useEffect(() => {
    judgePassword();
  }, [password]);

  return (
    <div className="items-center">
      <label>nickname</label>
      <input
        data-testid="name"
        type="text"
        onChange={(e) => setNickname(e.target.value)}
      ></input>
      <br />
      <br />
      <label>email</label>
      <input
        data-testid="email"
        type="text"
        style={styleEmail}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <span className="bg-red-600">{emailMsg}</span>
      <br />
      <label>password</label>
      <input
        data-testid="password"
        type="text"
        style={stylePassword}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {" " + checkMark}
      <br />
      <span className="bg-red-500">{passwordMsg}</span>
      <br />
      <button data-testid="signin" onClick={onclick}>
        signin
      </button>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default login;
