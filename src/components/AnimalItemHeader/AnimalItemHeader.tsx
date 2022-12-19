import React from 'react'

type Props = {
    text: string
}

const AnimalItemHeader = ({ text }: Props) => {
    return (
        <h2
            style={{
                textAlign: 'center',
                margin: 10,
                fontFamily: 'Open Sans, sans-serif',
            }}
        >
            {text}
        </h2>
    )
}

export default AnimalItemHeader
