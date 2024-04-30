'use client';

import styles from "@/components/main-header/main-header.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLink ({url, text}) {
  const path = usePathname();
  return <Link href={url} className={path.startsWith(url) ? styles.active : undefined}>{text}</Link>
}