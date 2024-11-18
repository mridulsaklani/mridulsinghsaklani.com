import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

 const hendler =  NextAuth({
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
  ],
})

export {hendler as GET, hendler as POST}