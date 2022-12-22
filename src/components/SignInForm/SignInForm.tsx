import React, { useState } from 'react'
import styles from 'components/SignInForm/SignInForm.module.css'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Routes } from '../../constants/routes'

const SignInForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const submitForm = async (e: React.MouseEvent) => {
        e.preventDefault()
        const response = await signIn('credentials', {
            login,
            password,
            redirect: false,
        })
        if (!response?.error) {
            router.push(
                (router.query.callbackUrl as string) || Routes.dashboard
            )
        } else {
            console.log('Sign in error -> ', response?.error)
        }
    }

    return (
        <div className={styles.signIn}>
            <div className={styles.signIn__container}>
                <h2 className={styles.header}>Sign in</h2>
                <form action="" className={styles.signIn__form}>
                    <h3 className={styles.signIn__fieldName}>Login</h3>
                    <input
                        type="text"
                        className={styles.signIn__input}
                        value={login}
                        onChange={(event) => {
                            setLogin(event.target.value)
                        }}
                    />
                    <h3 className={styles.signIn__fieldName}>Password</h3>
                    <input
                        type="password"
                        className={styles.signIn__input}
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                    <button
                        onClick={submitForm}
                        className={styles.signIn__submitButton}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm
