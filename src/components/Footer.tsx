import styles from '@/styles/Footer.module.scss'
import Image from "next/image";
import logo from '@/assets/logo.svg'
import logoWhite from '@/assets/logo-white.svg'
import Link from "next/link";
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <Image src={logoWhite} alt={"To buy list"} width={38} height={38} />
                    <h1>To buy list</h1>
                    <p>© Copyright 2023 Fluma.</p>
                </div>
                <div className={styles.links}>
                    <h3>ABOUT</h3>
                    <Link href={"/"}>Team</Link>
                    <Link href={"/"}>FAQ</Link>
                    <Link href={"/"}>Careers</Link>
                    <Link href={"/"}>Changelog</Link>
                    <Link href={"/"}>Blog</Link>
                </div>
                <div className={styles.links}>
                    <h3>DOWNLOADS</h3>
                    <Link href={"/"}>macOS</Link>
                    <Link href={"/"}>Windows</Link>
                    <Link href={"/"}>Linux</Link>
                </div>
                <div className={styles.links}>
                    <h3>DEVELOPERS</h3>
                    <Link href={"/"}>Documentation</Link>
                    <Link href={"/"}>Contribute</Link>
                </div>
                <div className={styles.links}>
                    <h3>ORG</h3>
                    <Link href={"/"}>Documentation</Link>
                    <Link href={"/"}>Contribute</Link>
                </div>
            </div>
        </footer>
    )
}