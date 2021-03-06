import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export type Hero = {
   __typename?: 'Hero',
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type HeroInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  saveHero?: Maybe<Hero>,
  addHero?: Maybe<Hero>,
  deleteHero?: Maybe<Hero>,
};


export type MutationSaveHeroArgs = {
  hero: HeroInput
};


export type MutationAddHeroArgs = {
  name: Scalars['String']
};


export type MutationDeleteHeroArgs = {
  hero: HeroInput
};

export type Query = {
   __typename?: 'Query',
  heroes?: Maybe<Array<Maybe<Hero>>>,
  hero?: Maybe<Hero>,
  searchHeroes?: Maybe<Array<Maybe<Hero>>>,
};


export type QueryHeroArgs = {
  id: Scalars['Int']
};


export type QuerySearchHeroesArgs = {
  searchTerm?: Maybe<Scalars['String']>
};

export type GetHeroesQueryVariables = {};


export type GetHeroesQuery = (
  { __typename?: 'Query' }
  & { heroes: Maybe<Array<Maybe<(
    { __typename?: 'Hero' }
    & Pick<Hero, 'id' | 'name'>
  )>>> }
);

export type GetHeroQueryVariables = {
  id: Scalars['Int']
};


export type GetHeroQuery = (
  { __typename?: 'Query' }
  & { hero: Maybe<(
    { __typename?: 'Hero' }
    & Pick<Hero, 'id' | 'name'>
  )> }
);

export type SaveHeroMutationVariables = {
  hero: HeroInput
};


export type SaveHeroMutation = (
  { __typename?: 'Mutation' }
  & { saveHero: Maybe<(
    { __typename?: 'Hero' }
    & Pick<Hero, 'id' | 'name'>
  )> }
);

export type SearchHeroesQueryVariables = {
  searchTerm?: Maybe<Scalars['String']>
};


export type SearchHeroesQuery = (
  { __typename?: 'Query' }
  & { searchHeroes: Maybe<Array<Maybe<(
    { __typename?: 'Hero' }
    & Pick<Hero, 'id' | 'name'>
  )>>> }
);

export type AddHeroMutationVariables = {
  name: Scalars['String']
};


export type AddHeroMutation = (
  { __typename?: 'Mutation' }
  & { addHero: Maybe<(
    { __typename?: 'Hero' }
    & Pick<Hero, 'id' | 'name'>
  )> }
);

export type DeleteHeroMutationVariables = {
  hero: HeroInput
};


export type DeleteHeroMutation = (
  { __typename?: 'Mutation' }
  & { deleteHero: Maybe<(
    { __typename?: 'Hero' }
    & Pick<Hero, 'id' | 'name'>
  )> }
);

export const GetHeroesDocument = gql`
    query getHeroes {
  heroes {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetHeroesGQL extends Apollo.Query<GetHeroesQuery, GetHeroesQueryVariables> {
    document = GetHeroesDocument;
    
  }
export const GetHeroDocument = gql`
    query getHero($id: Int!) {
  hero(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetHeroGQL extends Apollo.Query<GetHeroQuery, GetHeroQueryVariables> {
    document = GetHeroDocument;
    
  }
export const SaveHeroDocument = gql`
    mutation saveHero($hero: HeroInput!) {
  saveHero(hero: $hero) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveHeroGQL extends Apollo.Mutation<SaveHeroMutation, SaveHeroMutationVariables> {
    document = SaveHeroDocument;
    
  }
export const SearchHeroesDocument = gql`
    query searchHeroes($searchTerm: String) {
  searchHeroes(searchTerm: $searchTerm) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchHeroesGQL extends Apollo.Query<SearchHeroesQuery, SearchHeroesQueryVariables> {
    document = SearchHeroesDocument;
    
  }
export const AddHeroDocument = gql`
    mutation addHero($name: String!) {
  addHero(name: $name) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddHeroGQL extends Apollo.Mutation<AddHeroMutation, AddHeroMutationVariables> {
    document = AddHeroDocument;
    
  }
export const DeleteHeroDocument = gql`
    mutation deleteHero($hero: HeroInput!) {
  deleteHero(hero: $hero) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteHeroGQL extends Apollo.Mutation<DeleteHeroMutation, DeleteHeroMutationVariables> {
    document = DeleteHeroDocument;
    
  }


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Hero: ResolverTypeWrapper<Hero>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Mutation: ResolverTypeWrapper<{}>,
  HeroInput: HeroInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Hero: Hero,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Mutation: {},
  HeroInput: HeroInput,
  Boolean: Scalars['Boolean'],
};

export type NgModuleDirectiveArgs = {   module: Scalars['String'] };

export type NgModuleDirectiveResolver<Result, Parent, ContextType = any, Args = NgModuleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NamedClientDirectiveArgs = {   name: Scalars['String'] };

export type NamedClientDirectiveResolver<Result, Parent, ContextType = any, Args = NamedClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HeroResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hero'] = ResolversParentTypes['Hero']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  saveHero?: Resolver<Maybe<ResolversTypes['Hero']>, ParentType, ContextType, RequireFields<MutationSaveHeroArgs, 'hero'>>,
  addHero?: Resolver<Maybe<ResolversTypes['Hero']>, ParentType, ContextType, RequireFields<MutationAddHeroArgs, 'name'>>,
  deleteHero?: Resolver<Maybe<ResolversTypes['Hero']>, ParentType, ContextType, RequireFields<MutationDeleteHeroArgs, 'hero'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hero']>>>, ParentType, ContextType>,
  hero?: Resolver<Maybe<ResolversTypes['Hero']>, ParentType, ContextType, RequireFields<QueryHeroArgs, 'id'>>,
  searchHeroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hero']>>>, ParentType, ContextType, QuerySearchHeroesArgs>,
};

export type Resolvers<ContextType = any> = {
  Hero?: HeroResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  NgModule?: NgModuleDirectiveResolver<any, any, ContextType>,
  namedClient?: NamedClientDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;