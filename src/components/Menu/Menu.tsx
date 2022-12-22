import React from 'react'
import CustomLink from '../shared/CustomLink/CustomLink'
import styles from './Menu.module.css'
import { Routes } from '../../constants/routes'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Menu = () => {
    const session = useSession()
    const router = useRouter()
    console.log(router)

    const signOutHandler = () => signOut()

    return (
        <div className={styles.menu}>
            <CustomLink name={'Static Blog'} href={Routes.staticBlog} />
            <CustomLink name={'Blog'} href={Routes.blog} />
            <CustomLink name={'Contacts'} href={Routes.contacts} />
            {session.status === 'authenticated' ? (
                <button
                    onClick={signOutHandler}
                    className={styles.menu_signOut}
                >
                    Sign Out
                </button>
            ) : (
                <CustomLink
                    name={'Sign in'}
                    href={Routes.signIn}
                    bordered={true}
                />
            )}
        </div>
    )
}

export default Menu
