import NextAuth, { NextAuthOptions } from 'next-auth'
import { Routes } from '../../../constants/routes'
import CredentialsProvider from 'next-auth/providers/credentials'
import { useRouter } from 'next/router'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: Routes.signIn,
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            return { ...session, user: token }
        },
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                login: { label: 'Login', type: 'login', placeholder: 'Login' },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password',
                },
            },
            async authorize(credentials) {
                const localPath = 'http://localhost:3000'
                const remotePath = 'https://nextjs-blog-part1.vercel.app'
                const user = await fetch(`${remotePath}/api/sign-in`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login: credentials?.login,
                        password: credentials?.password,
                    }),
                }).then((res) => res.json())

                if (user?.error) {
                    throw new Error(user.error)
                }

                return user
            },
        }),
    ],
}

export default NextAuth(authOptions)
