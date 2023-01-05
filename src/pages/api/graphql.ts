import { ApolloServer, GraphQLSchemaContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "../apollo";
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema, makeExecutableSchema } from '@graphql-tools/schema';
import * as path from "path";
import * as fs from "fs";
import { GraphQLSchema } from "graphql";
import { stitchSchemas } from "@graphql-tools/stitch";
import { shouldCanonizeResults } from "@apollo/client/cache/inmemory/helpers";
import { getSession, getCsrfToken } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { log } from "console";
const schemas: GraphQLSchema[] = [];
const folders = fs.readdirSync("src/graphql/modules");
folders.forEach(folder => {
	const { resolvers } = require(`src/graphql/modules/${folder}/resolver`);
	const typeDef = loadSchemaSync(
		`src/graphql/modules/${folder}/schema.graphql`,
		{
			loaders: [new GraphQLFileLoader()],
		});
	const schema = addResolversToSchema({
		schema: typeDef,
		resolvers: resolvers
	})
	schemas.push(schema);
})
const subschemas = schemas.map(schema => {
	return {
		schema: schema
	}
})
console.log(subschemas);
const gatewaySchema = stitchSchemas({
	subschemas: schemas
})

const server = new ApolloServer({
	schema: gatewaySchema
});

const context = async (req, res) => {
	const csrfToken = await getCsrfToken({ req })
	const token = await getToken({ req })
	console.log('hello')
	console.log(token)
	console.log('ok')
	return csrfToken
}
export default startServerAndCreateNextHandler(server, {
	context: context
})
