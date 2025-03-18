import NextAuth from "next-auth";
import Providers from "next-auth/providers/google";

// Nos permite comunicarnos con los servicios de Google
const handler = NextAuth({
    providers: [ Providers({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })],
});

export {handler as GET, handler as POST};