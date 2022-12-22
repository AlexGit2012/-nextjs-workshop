import React from 'react'
import styles from './Dashboard.module.css'
import MediumHeader from '../shared/MediumHeader/MediumHeader'

type Props = {
    name: string
}

const Dashboard = ({ name }: Props) => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__container}>
                <MediumHeader text={`Welcome back ${name}!`} />
                <p className={styles.dashboard__greetings}>
                    You are at user dashboard now
                </p>
            </div>
        </div>
    )
}

export default Dashboard
