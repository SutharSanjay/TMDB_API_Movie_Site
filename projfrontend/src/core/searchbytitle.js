import React, { Fragment, useEffect ,useState} from "react"
import Nav from "./Nav"
import { getsearchresult } from "../controller"
import { Link, withRouter,Redirect } from "react-router-dom"
import empty from "../image/empty.webp"
import noimage from "../image/noimage.jpeg"

const SearchByTitle = (props) =>{

    const [array, setarray] = useState([])

    const preload = () =>{
        if(props.location.state !== undefined){
            getsearchresult(props.location.state.keyword)
            .then(data=>{
                setarray(data.results)
            })
        }
        else{
            return <Redirect to={{pathname:"/"}} />
        }
    }

    useEffect(() => {
        preload()
    },[])

    return(
        <div>
            {props.location.state !== undefined && (<Fragment>
                <Nav />
            <div className="result-page-main">
                <h2>Results for word : "{props.location.state.keyword}"</h2>
                <div className="results-main">
                    {array && array.map((element,index)=>{
                        return(
                            <Link className="link" to={{pathname:"/search",state:{id:element.id}}}>
                                <div key={index} className="card">
                                <div className="card-img">
                                    {console.log(element.poster_path)}
                                    {element.poster_path && (<Fragment><img alt="Profile" src={`http://image.tmdb.org/t/p/w500${element.poster_path}`} ></img></Fragment>)}
                                    {element.poster_path === null && (<img alt="Profile" src={noimage} ></img>)}
                                </div>
                                <h3>{element.original_title}</h3>
                                </div>
                            </Link>
                        )
                    })}
                    {console.log(array)}
                    {array.length===0 && (<Fragment>
                        <div className="nothing"><img alt="empty" src={empty}></img></div>
                    </Fragment>)}
                </div>
            </div>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3>Movie<span>Locate</span></h3>
                    <p class="footer-company-name">Design By Sanjay Suthar</p>
		        </div>
                <div class="footer-center">
                    <div>
                        <p><span>Parul University</span> Vadodara, India</p>
                    </div>
                    <div>
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
            </Fragment>)}
            {props.location.state === undefined && (<Redirect to={{pathname:"/"}} />)}
        </div>
    )
} 

export default withRouter(SearchByTitle)