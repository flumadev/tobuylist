import Image from "next/image";
import logo from '@/assets/logo.svg'
import styles from '@/styles/Navbar.module.scss'
import Link from "next/link";
import {DiscordLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons";
export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.logo}>
                    <Image src={logo} alt={"To buy list"} width={32} height={32} />
                    <h1>
                        To Buy List
                    </h1>
                </li>
                <li>
                    <ul className={styles.links}>
                        <li>
                            <Link href={"/roadmap"} >
                                Roadmap
                            </Link>

                        </li>
                        <li>
                            <Link href={"/team"} >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href={"/blog"} >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href={"/blog"} >
                                Docs
                            </Link>
                        </li>
                        <li>
                            <Link href={"/blog"} >
                                Careers
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <ul className={styles.social}>
                        <li>
                            <DiscordLogoIcon width={24} height={24}/>
                        </li>
                        <li>
                            <GitHubLogoIcon width={24} height={24}/>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}