import { Resolvers } from "../../resolvers-types";
export const resolvers: Resolvers = {
	Query: {
		// hello: (_, __, contextValue) => {
		hello: () => {
			// console.log(contextValue);
			return "";
		}
	},
};