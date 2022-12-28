import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginPayload: ResolverTypeWrapper<LoginPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  Sentence: ResolverTypeWrapper<Sentence>;
  SigninPayload: ResolverTypeWrapper<SigninPayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TPScore: ResolverTypeWrapper<TpScore>;
  Tag: ResolverTypeWrapper<Tag>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  LoginPayload: LoginPayload;
  Mutation: {};
  Query: {};
  Result: Result;
  Sentence: Sentence;
  SigninPayload: SigninPayload;
  String: Scalars['String'];
  TPScore: TpScore;
  Tag: Tag;
  User: User;
}>;

export type LoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']> = ResolversObject<{
  logined?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createScript?: Resolver<ResolversTypes['Sentence'], ParentType, ContextType, RequireFields<MutationCreateScriptArgs, 'lang' | 'scripts' | 'tagName' | 'title'>>;
  deleteScript?: Resolver<Maybe<ResolversTypes['Sentence']>, ParentType, ContextType, RequireFields<MutationDeleteScriptArgs, 'id'>>;
  loginUser?: Resolver<ResolversTypes['LoginPayload'], ParentType, ContextType, Partial<MutationLoginUserArgs>>;
  modifyScript?: Resolver<ResolversTypes['Sentence'], ParentType, ContextType, RequireFields<MutationModifyScriptArgs, 'lang' | 'scripts' | 'sentenceId' | 'tagName' | 'title'>>;
  postScore?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationPostScoreArgs, 'id' | 'typo'>>;
  signinUser?: Resolver<ResolversTypes['SigninPayload'], ParentType, ContextType, RequireFields<MutationSigninUserArgs, 'email' | 'name' | 'password'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getSentences?: Resolver<Array<ResolversTypes['Sentence']>, ParentType, ContextType>;
  getTPScore?: Resolver<ResolversTypes['TPScore'], ParentType, ContextType>;
  getTags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryGetUserArgs>>;
  getUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = ResolversObject<{
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SentenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sentence'] = ResolversParentTypes['Sentence']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentenceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SigninPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SigninPayload'] = ResolversParentTypes['SigninPayload']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signined?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TpScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['TPScore'] = ResolversParentTypes['TPScore']> = ResolversObject<{
  accuracy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wpm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  LoginPayload?: LoginPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Sentence?: SentenceResolvers<ContextType>;
  SigninPayload?: SigninPayloadResolvers<ContextType>;
  TPScore?: TpScoreResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

