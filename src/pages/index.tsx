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

    </>
  )
}
