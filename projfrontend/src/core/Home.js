import React, { useState } from "react"
import Nav from "./Nav"
import "./core_style.css"
import Now from "./nowplaying"
import Popular from "./popular"
import Rated from "./rated"
import Upcoming from "./upcoming"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"



const Home =()=>{

    const [name, setname] = useState()

    const handlechange = name=> event =>{
        setname(event.target.value)
    }

    const getbutton=()=>{
        if(name === undefined){
            return <Link to={{pathname : "/title",state:{keyword:name}}}><button disabled>Search</button></Link>
        }
        else{
            return <Link to={{pathname : "/title",state:{keyword:name}}}><button >Search</button></Link>
        }
    }

    return(
        <div className="main">
            <Nav />
            <div className="search-main">
                <div className="search-title">
                    <h2>Welcome!</h2>
                    <h6>Millions of movies details and reviews in one place.</h6>
                    <span><input id="input" value={name} required onChange={handlechange("name")} placeholder="Movie Name" type="text" />{getbutton()}</span>
                </div>
            </div>
            <Popular />
            <Rated />
            <Now />
            <Upcoming />
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Movie<span>Locate</span></h3>
                    <p className="footer-company-name">Design By Sanjay Suthar</p>
		        </div>
                <div className="footer-center">
                    <div>
                        <p><span>Parul University</span> Vadodara, India</p>
                    </div>
                    <div>
                        <p><a href="mailto:support@company.com">sanjaysuthar786786@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                    <span>About this Platform</span>
                        This Platform For Movies
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default withRouter(Home)