//pour afficher la navBar partout il faut la mettre dans un container (ici Container.js)
// puis avec ce container, on englobe _app.js


import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className = {styles.navbar}>
            <Link href="/">
                <a>Accueil</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/liste">
                <a>Liste des membres</a>
            </Link>
        </nav>
    )
}
