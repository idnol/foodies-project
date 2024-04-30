import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader () {
  return <>
    <MainHeaderBackground />

    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink text="Browse meals" url="/meals" />
          </li>
          <li>
            <NavLink text="Foodies community" url="/community" />
          </li>
        </ul>
      </nav>
    </header>
  </>
}