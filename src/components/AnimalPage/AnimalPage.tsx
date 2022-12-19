import React from 'react'
import styles from './AnimalPage.module.css'
import Image from 'next/image'
import { AnimalItemType } from '../AnimalItem/AnimalItem'

type Props = {
    animal: AnimalItemType
}

const AnimalPage = ({ animal }: Props) => {
    const { image, title, description } = animal

    return (
        <div className={styles.animal}>
            <div className={styles.animal__container}>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={200}
                    layout={'responsive'}
                />
                <span className={styles.animal__description}>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default AnimalPage
