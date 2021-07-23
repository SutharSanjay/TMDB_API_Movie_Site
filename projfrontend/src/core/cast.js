import React,{useEffect, Fragment,useState} from "react"
import { getcast } from "../controller"
import noimage from "../image/noimage.jpeg"
import empty from "../image/empty.webp"


const Cast = (movie_id) =>{
    const [array, setarray] = useState([])
    const preload = ()=>{
        getcast(movie_id.movie_id)
        .then(data=>{
            setarray(data.cast)
        })
        .catch(err=>console.log(err))
    }
    useEffect(() => {
        preload()
    },[])
    return(
        <div className="cast"> 
            <h2>Cast</h2>
                <div className="cast-main">
                        {array.map((element,index)=>{
                            return(
                                <div key={index}  className="card">
                                <div className="card-img">
                                    {element.profile_path && (<Fragment><img alt="profile" src={`http://image.tmdb.org/t/p/w500${element.profile_path}`} ></img></Fragment>)}
                                    {element.profile_path === null && (<Fragment><img alt="profile" src={noimage} ></img></Fragment>)}
                                </div>
                                <h3>{element.original_name}</h3>
                            </div>
                            )
                        })}
                         {array.length===0 && (<Fragment><img className="cast-empty" alt="empty" src={empty}></img></Fragment>)}
                </div>
            </div>
    )
}

export default Cast