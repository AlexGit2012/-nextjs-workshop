import React from 'react'
import { GET_ANIMAL } from '../../queries/queries'
import AnimalPage from '../../components/AnimalPage/AnimalPage'
import { client } from '../../apollo-client/apollo-client'
import { GetServerSidePropsContext } from 'next'
import { AnimalItemType } from '../../components/AnimalItem/AnimalItem'
import { createGetServerSideProps } from '../../utils/createGetServerSideProps'
import AnimalItemHeader from '../../components/AnimalItemHeader/AnimalItemHeader'

export const getServerSideProps = createGetServerSideProps(
    async (ctx: GetServerSidePropsContext) => {
        const { data } = await client.query({
            query: GET_ANIMAL,
            variables: {
                title: ctx.query.slug,
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
)

type Props = {
    data: {
        animal: AnimalItemType
    }
}

const Slug = ({ data: { animal } }: Props) => {
    return (
        <div>
            <AnimalItemHeader text={'Server side props'} />
            <AnimalPage animal={animal} />
        </div>
    )
}

export default Slug
