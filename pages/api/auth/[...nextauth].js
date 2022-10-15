import GitHubProvider from "next-auth/providers/github"
import NextAuth from "next-auth/next"
const authOptions = {
    //configure auth provider 
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
}

export default NextAuth(authOptions)