import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {GitHubLogoIcon} from "@radix-ui/react-icons"
import exampleImage from '@/assets/example.jpg'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>To buy list</title>
        <meta name="description" content="Combine your shopping lists into one database that you can organize and explore from any device. Designed for people who love to shop." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
      <main className={styles.main}>
            <div>
                <h1 className={styles.title}>A shopping list from the future.</h1>
                <p className={styles.description}>Combine your shopping lists into one database that you can organize and explore from any device. Designed for people who love to shop.</p>
            </div>
            <div className={styles.formContainer}>
                <Link href={"https://github.com/flumadev/tobuylist"} target={"_blank"} className={styles.gitButton}><GitHubLogoIcon />Star on Github</Link>
                {/*<form className={styles.form}>*/}
                {/*    <input className={styles.emailInput} placeholder={"Join Waitlist"} />*/}
                {/*    <button>Submit</button>*/}
                {/*</form>*/}
            </div>
          <div className={styles.example}>
              <Image src={exampleImage} className={styles.exampleImage} alt={"example"}  width={1280}/>
          </div>
      </main>
        <Footer />
    </>
  )
}
