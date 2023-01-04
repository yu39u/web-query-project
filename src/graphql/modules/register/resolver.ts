import { Resolvers, User as gqlUser } from "@generated/resolvers-types";
import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()
export const resolvers: Resolvers = {
	Query: {
		hello: (_, __, contextValue) => {
			// hello: () => {
			// console.log(contextValue);
			return 'hello';
		},
		getUsers: async (_, __, contextValue): Promise<gqlUser[]> => {
			const allUsers: User[] = await prisma.user.findMany()
			return allUsers
		},
	},
};