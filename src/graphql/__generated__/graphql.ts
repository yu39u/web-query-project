/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  logined: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createScript: Sentence;
  deleteScript?: Maybe<Sentence>;
  loginUser: LoginPayload;
  modifyScript: Sentence;
  postScore: Result;
  signinUser: SigninPayload;
};


export type MutationCreateScriptArgs = {
  lang: Scalars['String'];
  scripts: Array<Scalars['String']>;
  tagId?: InputMaybe<Scalars['String']>;
  tagName: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteScriptArgs = {
  id: Scalars['String'];
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationModifyScriptArgs = {
  lang: Scalars['String'];
  scripts: Array<Scalars['String']>;
  sentenceId: Scalars['String'];
  tagId?: InputMaybe<Scalars['String']>;
  tagName: Scalars['String'];
  title: Scalars['String'];
};


export type MutationPostScoreArgs = {
  id: Scalars['String'];
  time?: InputMaybe<Scalars['Int']>;
  typo: Array<Scalars['String']>;
};


export type MutationSigninUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getSentences: Array<Sentence>;
  getTPScore: TpScore;
  getTags: Array<Maybe<Tag>>;
  getUser?: Maybe<User>;
  getUsers: Array<User>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  result: Scalars['Boolean'];
};

export type Sentence = {
  __typename?: 'Sentence';
  id: Scalars['String'];
  sentenceName?: Maybe<Scalars['String']>;
  tagId: Scalars['String'];
};

export type SigninPayload = {
  __typename?: 'SigninPayload';
  name?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  signined: Scalars['Boolean'];
};

export type TpScore = {
  __typename?: 'TPScore';
  accuracy?: Maybe<Scalars['Int']>;
  wpm?: Maybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id?: number | null, name?: string | null, email?: string | null }> };

export type SiginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type SiginMutation = { __typename?: 'Mutation', signinUser: { __typename?: 'SigninPayload', sessionId?: string | null, name?: string | null, signined: boolean } };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;
export const SiginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sigin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signinUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"signined"}}]}}]}}]} as unknown as DocumentNode<SiginMutation, SiginMutationVariables>;