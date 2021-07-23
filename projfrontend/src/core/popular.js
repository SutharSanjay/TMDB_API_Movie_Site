import React,{useState,useEffect, Fragment} from "react"
import {Link} from "react-router-dom"
import { popular } from "../controller"
import noimage from "../image/noimage.jpeg"


const Popular = ({history})=>{
    const [array, setarray] = useState([])
    const preload=()=>{
        popular()
        .then(data=>{
            setarray(data.results)
        })
        .catch(err=>console.log(err))
    }


    useEffect(() => {
        preload()   
    }, [])

    return(
        <div data-aos="zoom-out-down"  className="popular">
                <h2>What's Popular<Link className="link" to={{pathname:"/popular/more"}}><span><button className="btn-popular">Show All</button></span></Link></h2>
                
                <div className="popular-main">
                    {array.map((element,index) => {
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

export default Popular