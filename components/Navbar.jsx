import Link from "next/link"
import "../app/globals.css"
export default function navbar(){
    return(
        <div>
            <nav className="grid grid-cols-2">
                <header><img src="../public/logo.png" alt="logo" />logo</header>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                                        <li>
                        <Link href="about">About</Link>
                    </li>
                                        <li>
                        <Link href="services">Services</Link>
                    </li>
                                        <li>
                        <Link href="contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}