'use client'
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <header className='navbar'>
            <Link href='/' className='navbar-logo'>Avora.</Link>

            <nav className={`navbar-links ${menuOpen ? "active" : ""}`} id="navbar-navigation" aria-label="Huvudmeny">
                 <Link href="/resmal" onClick={() => setMenuOpen(false)}> Resmål</Link>
                <Link href="/om-oss" onClick={() => setMenuOpen(false)}>Om oss</Link>
            </nav>
            </header>
        </>
    )
  
}