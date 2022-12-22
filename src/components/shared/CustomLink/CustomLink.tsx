import React from 'react'
import Link from 'next/link'
import { Url } from 'url'
import styles from './CustomLink.module.css'

type Props = {
    name: string
    href?: string
    bordered?: boolean
}

const CustomLink = ({ name, href = '/', bordered = false }: Props) => {
    return (
        <Link href={href} legacyBehavior>
            <a
                className={`${styles.headerLink} ${
                    bordered ? styles.borderedHeaderLink : ''
                }`}
            >
                {name}
            </a>
        </Link>
    )
}

export default CustomLink
