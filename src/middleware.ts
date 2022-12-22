import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(request) {
        let redirectPath = ''
        const url = request.nextUrl.clone()

        if (request?.nextauth?.token?.role === 'admin') {
            redirectPath = '/dashboard/admin'
        } else {
            redirectPath = '/dashboard'
        }

        const newUrl = new URL(redirectPath, request.url)

        if (url.pathname !== redirectPath) {
            return NextResponse.redirect(newUrl)
        }
    },
    {
        callbacks: {
            async authorized({ token }) {
                return !!token
            },
        },
    }
)

export const config = {
    matcher: ['/dashboard', '/dashboard/admin'],
}
