import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql as g } from "@apollo/client";
import { graphql } from "@generated/gql";

const LOGIN = graphql(`
  mutation test($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      sessionId
      name
      logined
    }
  }
`);
export default function hoge() {
  // const client = ...
  const { loading, error, data } = useQuery(LOGIN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div className="underline underline-offset-8 bg-red-300, mr-auto">hoge</div>
  );
}
