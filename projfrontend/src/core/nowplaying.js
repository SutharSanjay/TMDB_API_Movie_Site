import React,{useState,Fragment,useEffect} from "react"
import {Link, Redirect} from "react-router-dom"
import { nowplaying } from "../controller"
import noimage from "../image/noimage.jpeg"

const Now = ()=>{
    const [array, setarray] = useState([])
    const preload=()=>{
        nowplaying()
        .then(data=>{
            setarray(data.results)
        })
        .catch(err=>console.log(err))
    }


    const click = (id) =>{
        return <Redirect to="/search#" /> 
    }


    useEffect(() => {
        preload()   
    },[])

    return(
        <div data-aos="zoom-out-down"  className="popular">
                <h2>Now Playing <Link className="link" to={{pathname:"/nowplaying/more"}}><span><button className="btn-popular">Show All</button></span></Link></h2>
                <div className="popular-main">
                    {array.map((element,index) => {
                        return(
                            <Link key={index} className="link" to={{pathname:"/search",state:{id:element.id}}}>
                                <div onClick={()=>{click(element.id)}} className="card">
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

export default Now