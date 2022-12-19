import React from 'react'
import ErrorPage from '../components/ErrorPage/ErrorPage'

const NotFoundErrorPage = () => {
    return (
        <div>
            <ErrorPage
                title={'Something went wrong '}
                message={
                    'Unexpected error occurs during runtime of the application'
                }
            />
        </div>
    )
}

export default NotFoundErrorPage
