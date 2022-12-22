import React from 'react'
import styles from './MediumHeader.module.css'

type Props = {
    text: string
}

const MediumHeader = ({ text }: Props) => {
    return <h2 className={styles.mediumHeader}>{text}</h2>
}

export default MediumHeader
