import NextAuth from "next-auth"
import AzureAD from "next-auth/providers/azure-ad"

const adminEmails = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean)

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
  AzureAD({
    clientId: process.env.AZURE_AD_CLIENT_ID!,
    clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
    tenantId: process.env.AZURE_AD_TENANT_ID!,
  }),
],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, profile }) {
      const email =
        (profile as any)?.email ||
        (profile as any)?.preferred_username ||
        token.email

      token.email = typeof email === "string" ? email.toLowerCase() : token.email
      token.isAdmin = !!token.email && adminEmails.includes(String(token.email))
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string
        ;(session.user as any).isAdmin = token.isAdmin
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})