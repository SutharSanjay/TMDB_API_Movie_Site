import React,{useState,Fragment,useEffect} from "react"
import { Link } from "react-router-dom"
import { getsimilar } from "../controller"
import noimage from "../image/noimage.jpeg"
import empty from "../image/empty.webp"

const Similar = (movie_id) =>{
    const [array, setarray] = useState([])
    const preload = ()=>{
        getsimilar(movie_id.movie_id)
        .then(data=>{
            setarray(data.results)
        })
        .catch(err=>console.log(err))
    }
    useEffect(() => {
        preload()
    },[array])
    return(
        <div className="similar">
            <h2>Similar Movies </h2>
                <div className="similar-main">
                        {array.map((element,index)=>{
                            return(
                                <Link  key={index} className="link" to={{pathname:"/search",state:{id:element.id}}}>
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
                        {array.length===0 && (<Fragment><img className="similar-empty" alt="empty" src={empty}></img></Fragment>)}
                </div>
            </div>
    )
}

export default Similar