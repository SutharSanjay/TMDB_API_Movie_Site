import React, { useEffect,Fragment ,useState} from "react"
import Nav from "./Nav"
import { getmore, nowplaying } from "../controller"
import { Link, withRouter } from "react-router-dom"
import noimage from "../image/noimage.jpeg"


const ShowMoreNowPlaying = (props) =>{
    const [array1, setarray1] = useState([])
    const [array, setarray] = useState([])

    const preload = () =>{
        nowplaying()
        .then(data=>{
            setarray(data.results)
        })
        .then(
            getmore("now_playing").then(data=>{
                setarray1(data.results)
            })
        )
    }

    useEffect(() => {
        preload()
    }, [])

    return(
        <div>
            <Nav />
            <div className="result-page-main">
                <h2>Now Playing</h2>
                <div className="results-main">
                    {array1.map((element,index)=>{
                        return(
                            <Link className="link" to={{pathname:"/search",state:{id:element.id}}}>
                                <div key={index} className="card">
                                <div className="card-img">
                                    {element.poster_path && (<Fragment><img alt="Profile" src={`http://image.tmdb.org/t/p/w500${element.poster_path}`} ></img></Fragment>)}
                                    {element.poster_path === null && (<Fragment><img alt="Profile" src={noimage} ></img></Fragment>)}
                                </div>
                                <h3>{element.original_title}</h3>
                                </div>
                            </Link>
                        )
                    })}
                    {array.map((element,index)=>{
                        return(
                            <Link className="link" to={{pathname:"/search",state:{id:element.id}}}>
                                <div key={index} className="card">
                                <div className="card-img">
                                    {element.poster_path && (<Fragment><img alt="Profile" src={`http://image.tmdb.org/t/p/w500${element.poster_path}`} ></img></Fragment>)}
                                    {element.poster_path === null && (<Fragment><img alt="Profile" src={noimage} ></img></Fragment>)}
                                </div>
                                <h3>{element.original_title}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3>Movie<span>Locate</span></h3>
                    <p class="footer-company-name">Design By Sanjay Suthar</p>
		        </div>
                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Parul University</span> Vadodara, India</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>8200142798</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">sanjaysuthar786786@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                    <span>About this Platform</span>
                        This Platform For Movies
                    </p>
                </div>
            </footer>
        </div>
    )
} 

export default withRouter(ShowMoreNowPlaying)