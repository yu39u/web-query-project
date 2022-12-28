import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'src/graphql/modules/*/schema.graphql',
	documents: 'src/pages/**/*.{ts,tsx}',
	generates: {
		'./src/graphql/__generated__/resolvers-types.ts': {
			config: {
				useIndexSignature: true,
			},
			plugins: ['typescript', 'typescript-resolvers'],
		},
		'./src/graphql/__generated__/': {
			preset: 'client',
			plugins: [],
			// presetConfig: {
			// 	gqlTagName: 'gql',
			// }
		}
	},
};
export default config;