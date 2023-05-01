import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interest from "./components/Interest.js"
import Footer from "./components/Footer.js"

function App(){
    return(
        <div className="container">
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))