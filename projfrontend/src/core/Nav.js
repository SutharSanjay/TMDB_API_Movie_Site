
import React from "react"
import {Link, withRouter} from "react-router-dom"
const Nav =()=>{
    const scroll=(a)=> {
        window.scrollTo(0,10000);
        }
    return(
        <div className="nav">
            <div className="logo">
                <Link className="link" to="/"><span className="logo-main">Movie</span><span>Locate</span></Link>
            </div>
            <div className="nav-main">
                <ul>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="" onClick={()=>{return scroll(true)}}>Abount us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Nav)