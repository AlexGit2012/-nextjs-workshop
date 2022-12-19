import React from 'react'
import AnimalBlog from '../../components/AnimalBlog/AnimalBlog'
import { GET_ALL_ANIMALS } from '../../queries/queries'
import { GetStaticPropsContext } from 'next'
import { client } from '../../apollo-client/apollo-client'
import { AnimalItemType } from '../../components/AnimalItem/AnimalItem'
import AnimalItemHeader from '../../components/AnimalItemHeader/AnimalItemHeader'

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const { data } = await client.query({
        query: GET_ALL_ANIMALS,
    })
    return {
        props: {
            data,
        },
    }
}

type Props = {
    data: {
        animals: AnimalItemType[]
    }
}

const Blog = ({ data: { animals } }: Props) => {
    return (
        <div>
            <AnimalItemHeader text={'Static props'} />
            <AnimalBlog animalList={animals} />
        </div>
    )
}

export default Blog
