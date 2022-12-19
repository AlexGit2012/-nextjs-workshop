import React from 'react'

type Props = {
    title: string
    message: string
}

const ErrorPage = ({ title, message }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <h2
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        paddingBottom: 10,
                    }}
                >
                    {title}
                </h2>
                <p style={{ fontFamily: 'Roboto, sans-serif' }}>{message}</p>
            </div>
        </div>
    )
}

export default ErrorPage
