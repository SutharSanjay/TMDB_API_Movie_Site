import React,{useState,Fragment,useEffect} from "react"
import { ratedfetch } from "../controller"
import { Link } from "react-router-dom"
import noimage from "../image/noimage.jpeg"

const Rated = () =>{
    const [array, setarray] = useState([])
    const preload = ()=>{
        ratedfetch()
        .then(data=>{
            setarray(data.results)
        })
    }
    useEffect(() => {
        preload()
    }, [])

    return(
        <div data-aos="zoom-out-right" className="rated">
                <h2>Top Rated <Link className="link" to={{pathname:"/rated/more"}}><span><button className="btn-popular">Show All</button></span></Link></h2>
                <div className="rated-main">
                    {array.map((element,index)=>{
                        return(
                            <Link key={index} className="link" to={{pathname:"/search",state:{id:element.id}}}>
                                <div className="card">
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
    )
}

export default Rated