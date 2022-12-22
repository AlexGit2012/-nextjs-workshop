import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import { createGetServerSideProps } from '../../utils/createGetServerSideProps'
import { GetServerSidePropsContext } from 'next'
import { userProps } from './admin'

export const getServerSideProps = createGetServerSideProps(
    async (ctx: GetServerSidePropsContext) => {
        return {
            props: {},
        }
    }
)

const Index = ({ user: { name } }: userProps) => {
    return (
        <div>
            <Dashboard name={name} />
        </div>
    )
}

export default Index
