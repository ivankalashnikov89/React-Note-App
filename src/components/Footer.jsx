import React from "react"

export default function Footer() {

    let getY = new Date();
    let year = getY.getFullYear();

    return <footer>
        <p>copyright {year}</p>
        </footer>
}
