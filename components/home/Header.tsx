"use client"

// Header : entête de la page

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
       <header className="fixed top-6 inset-x-4 md:inset-x-10 z-50 flex items-center justify-between px-4 md:px-10 md:py-6 py-8 bg-whitesmoke shadow rounded-xl">
            <Image
                src="/corvus-logotype2.svg"
                alt="corbeau"
                width={90}
                height={30}
                className="w-35 h-auto md:w-35"
            />

            <nav className="hidden md:block px-2">
                <ul className="flex gap-8">
                    <li className="text-grey font-medium cursor-pointer hover:opacity-80 transition-opacity"><Link href="/projects" >Réalisations</Link></li>
                    <li className="text-grey font-medium cursor-pointer hover:opacity-80 transition-opacity"><Link href="/tools" >Trouvailles</Link></li>
                    <li className="text-grey font-medium cursor-pointer hover:opacity-80 transition-opacity"><Link href="/about" >À propos</Link></li>
                </ul>
            </nav>

            <button className="hidden md:block bg-navy font-semibold text-white px-6 py-3 rounded-xl hover:opacity-80 transition-opacity">
                <Link href="">
                    Contacter
                </Link>
            </button>

            <button
                className="md:hidden text-navy"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Ouvrir le menu"
            >
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>

            {menuOpen && (
                    <nav className="flex flex-col absolute top-full mt-2 left-0 w-full bg-navy md:hidden py-8 items-center justify-center rounded-xl">
                        <ul className="flex flex-col items-center gap-6 py-6">
                            <li className="text-white font-medium"><Link href="/projects" onClick={() => setMenuOpen(false)}>Réalisations</Link></li>
                            <li className="text-white font-medium"><Link href="/tools" onClick={() => setMenuOpen(false)}>Trouvailles</Link></li>
                            <li className="text-white font-medium"><Link href="/about" onClick={() => setMenuOpen(false)}>À propos</Link></li>
                        </ul>

                        <button className="md:block bg-white font-semibold text-navy px-6 py-2 rounded-xl hover:opacity-80 transition-opacity">
                            <Link href="">
                                Contacter
                            </Link>
                        </button>
                    </nav>
            )}

        </header>
    )
}