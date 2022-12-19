import React from 'react'
import AnimalBlog from '../../components/AnimalBlog/AnimalBlog'
import { GET_ALL_ANIMALS } from '../../queries/queries'
import { client } from '../../apollo-client/apollo-client'
import { AnimalItemType } from '../../components/AnimalItem/AnimalItem'
import { createGetServerSideProps } from '../../utils/createGetServerSideProps'
import { GetServerSidePropsContext } from 'next'

export const getServerSideProps = createGetServerSideProps(
    async (ctx: GetServerSidePropsContext) => {
        const { data } = await client.query({
            query: GET_ALL_ANIMALS,
        })
        return {
            props: {
                data,
            },
        }
    }
)

type Props = {
    data: {
        animals: AnimalItemType[]
    }
}

const Blog = ({ data: { animals } }: Props) => {
    return (
        <div>
            <AnimalBlog animalList={animals} />
        </div>
    )
}

export default Blog
