import { Routes } from '../constants/routes'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

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
            return await callback(ctx)
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
