import React from "react"
import { About } from "./About"
import { TopView } from "./TopView"
import { Connect } from "./Connect"

export const Home = () => {

    return (
        <div>
            <TopView />
            <About />
            <Connect />
        </div>
    )
}