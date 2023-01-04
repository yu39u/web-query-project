import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql as g } from "@apollo/client";
import { graphql } from "@generated/gql";
import { useSession } from "next-auth/react";

const LOGIN = graphql(`
  query test {
    getUsers {
      id
      name
      email
    }
  }
`);
export default function hoge() {
  // const client = ...
  const { loading, error, data } = useQuery(LOGIN);
  const { data: session, status } = useSession();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div className="underline underline-offset-8 mr-auto bg-white">hoge</div>
  );
}
