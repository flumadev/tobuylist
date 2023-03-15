import styles from '@/styles/Footer.module.scss'
import Image from "next/image";
import logo from '@/assets/logo.svg'
import logoWhite from '@/assets/logo-white.svg'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <Image src={logoWhite} alt={"To buy list"} width={38} height={38}/>
                    <h1>To buy list</h1>
                    <p>© Copyright 2023 Fluma.</p>
                </div>
                <div className={styles.links}>
                    <h3>ABOUT</h3>
                    <Link aria-disabled href={"/"}>Team</Link>
                    <Link aria-disabled href={"/"}>FAQ</Link>
                    <Link aria-disabled href={"/"}>Careers</Link>
                    <Link aria-disabled href={"/"}>Changelog</Link>
                    <Link aria-disabled href={"/"}>Blog</Link>
                </div>
                <div className={styles.links}>
                    <h3>DOWNLOADS</h3>
                    <Link aria-disabled href={"/"}>macOS</Link>
                    <Link aria-disabled href={"/"}>Windows</Link>
                    <Link aria-disabled href={"/"}>Linux</Link>
                </div>
                <div className={styles.links}>
                    <h3>DEVELOPERS</h3>
                    <Link aria-disabled href={"/"}>Documentation</Link>
                    <Link aria-disabled href={"/"}>Contribute</Link>
                </div>
                <div className={styles.links}>
                    <h3>ORG</h3>
                    <Link aria-disabled href={"/"}>Documentation</Link>
                    <Link aria-disabled href={"/"}>Contribute</Link>
                </div>
            </div>
        </footer>
    )
}