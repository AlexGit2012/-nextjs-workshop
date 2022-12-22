import React from 'react'
import MediumHeader from '../../../components/shared/MediumHeader/MediumHeader'
import { createGetServerSideProps } from '../../../utils/createGetServerSideProps'
import { GetServerSidePropsContext } from 'next'

export const getServerSideProps = createGetServerSideProps(
    async (ctx: GetServerSidePropsContext) => {
        return {
            props: {},
        }
    }
)

export type userProps = {
    user: {
        name: string
        email: string
        role: string
        iat: number
        exp: number
        jti: string
    }
}

const Index = ({ user: { name } }: userProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MediumHeader
                text={`Welcome to administrator panel administrator ${name}!`}
            />
        </div>
    )
}

export default Index
