import PrismaClient from "@prisma/client";
import "next-auth";
import "next-auth/client";
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { NextApiRequest } from "next";

declare module "next-auth/client" { }

declare module "next-auth" {
	// export interface User extends DefaultUser {
	// 	id: number;
	// 	profile: PrismaClient.Profile;
	// }

	interface Session extends DefaultSession {
		// expires: string;
		// userId: number;
		// profile: PrismaClient.Profile;
		username: string
	}
}

declare module "next-auth/jwt" {
	export interface JWT extends Record<string, unknown>, DefaultJWT {
		// userId: number;
		// email: string;
		// expires: string;
		// profile: PrismaClient.Profile;
		username: string;
	}
}
// export interface GQContext extends BaseContext {
// 	prisma: PrismaClient.PrismaClient;
// 	req: NextApiRequest;
// }