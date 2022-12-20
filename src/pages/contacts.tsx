import type { NextPage } from 'next'
import Head from 'next/head'
import ContactsPage from '../components/ContactsPage/ContactsPage'

const Contacts: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Contacts</title>
                <meta name="description" content="Wild life contacts" />
            </Head>
            <ContactsPage />
        </div>
    )
}

export default Contacts
