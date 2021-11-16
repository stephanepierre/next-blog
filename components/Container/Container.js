import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Container(props) {
    return (
        <>
            <Navbar />

            {/* ne pas oublier de mettre props.children pour afficher le reste des pages sous la navBar */}
            {props.children}
        </>
    )
}
