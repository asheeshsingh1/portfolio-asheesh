"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">Home</Link>
      </div>
      <nav className="nav-links">
        <Link href="/workex">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
