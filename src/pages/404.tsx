import React from 'react'
import ErrorPage from '../components/ErrorPage/ErrorPage'

const NotFoundErrorPage = () => {
    return (
        <div>
            <ErrorPage
                title={'Error 404 - Page not found'}
                message={
                    'Oops! It looks like you trying to get access to wrong url.\n' +
                    '                    If you still sure about page destination, please contact\n' +
                    '                    administrator.'
                }
            />
        </div>
    )
}

export default NotFoundErrorPage
