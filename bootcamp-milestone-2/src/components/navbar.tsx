import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
      <Link  className={style.personalWebsite}href="/" >Personal Website</Link>
      <nav>
        <Link href="/" >Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume" >Resume</Link>
        <Link href="/contact" >Contact Me</Link>
      </nav>
    </header>
  );
}
