import React from "react"

export default function Header() {

    let day = new Date().toLocaleString("en-us", { weekday: "long" });

    return <header>
        <h1>Daily planner</h1>
        <h1 className="dayOfWeek">{day}</h1>
            </header>
}