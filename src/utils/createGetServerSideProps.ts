import { Routes } from '../constants/routes'
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export async function addUser(
    context: GetServerSidePropsContext,
    response: GetServerSidePropsResult<any>
) {
    if ('props' in response) {
        try {
            const session = await unstable_getServerSession(
                context.req,
                context.res,
                authOptions
            )
            response.props.user = session?.user || null
        } catch (e) {
            console.log(e)
        }
    }
    return response
}

export const createGetServerSideProps =
    (
        callback: (
            ctx: GetServerSidePropsContext
        ) => ReturnType<GetServerSideProps>
    ) =>
    async (
        ctx: GetServerSidePropsContext
    ): Promise<ReturnType<GetServerSideProps>> => {
        try {
            const response = await callback(ctx)
            return await addUser(ctx, response)
        } catch (e) {
            console.log('Error ->', e)
            return {
                redirect: {
                    permanent: false,
                    destination: Routes.somethingWrong,
                },
            }
        }
    }
