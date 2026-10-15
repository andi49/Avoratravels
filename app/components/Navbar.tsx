import Link from "next/link"

export default function Navbar() {
    return(
        <>
            <header className='navbar'>
            <Link href='/' className='navbar-logo'>Avora.</Link>

            <nav className={`navbar-links`} id="navbar-navigation" aria-label="Huvudmeny">
                 <Link href="/resmal"> Resmål</Link>
                <Link href="/om-oss">Om oss</Link>
            </nav>
            </header>
        </>
    )
  
}