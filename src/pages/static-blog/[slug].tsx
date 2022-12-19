import React from 'react'
import AnimalPage from '../../components/AnimalPage/AnimalPage'
import { AnimalItemType } from '../../components/AnimalItem/AnimalItem'
import { GetStaticPathsResult, GetStaticPropsContext } from 'next'
import { client } from '../../apollo-client/apollo-client'
import { GET_ALL_ANIMALS, GET_ANIMAL } from '../../queries/queries'
import AnimalItemHeader from '../../components/AnimalItemHeader/AnimalItemHeader'

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const { data } = await client.query({
        query: GET_ANIMAL,
        variables: {
            title: ctx.params?.slug,
        },
    })

    if (!data.animal) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data,
        },
    }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const { data } = await client.query({
        query: GET_ALL_ANIMALS,
    })

    const { animals } = data

    return {
        fallback: false,
        paths: animals.map(({ title }: AnimalItemType) => ({
            params: {
                slug: title,
            },
        })),
    }
}

type Props = {
    data: {
        animal: AnimalItemType
    }
}

const Slug = ({ data: { animal } }: Props) => {
    return (
        <>
            <AnimalItemHeader text={'Static props'} />
            <AnimalPage animal={animal} />
        </>
    )
}

export default Slug
