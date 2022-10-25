import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function modal() {
    return (
        <div className={`${styles.modal} ${styles.pageCenter}`}>
            <div className={styles.modalDialog}>
                <Link href="/register">
                    <a className={styles.primary}>Proceed</a>
                </Link>
                <Link href="/">
                    <a className={styles.outline}>Leave</a>
                </Link>
            </div>
        </div>
    )
}
