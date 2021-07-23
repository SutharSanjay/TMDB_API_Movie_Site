import React,{useState,useEffect, Fragment} from "react"
import { getreview } from "../controller"
import star from '../image/star.png'
import icon from "../image/review-icon.png"
import empty from "../image/empty.webp"

const Review = (movie_id) =>{
    const [array, setarray] = useState([])
    const preload = ()=>{
        getreview(movie_id.movie_id)
        .then(data=>{
            setarray(data.results)
        })
        .catch(err=>console.log(err))
    }
    useEffect(() => {
        preload()
    },[])
    return(
        <div className="review">
            <h2>Reviews</h2>
                <div className="review-main">
                    {array.map((element,index)=>{
                        return(
                            <div key={index} className="review-card">
                            <div className="review-avtar"><img alt="Profile" src={icon}></img></div>
                            <div className="review-name"><p className="reviewby">Review By {element.author_details.name} <span><img alt="Profile" src={star}></img>{element.author_details.rating}</span></p><h4 className="reviewbytime">written by {element.author_details.username} on {element.created_at.slice(0, 10)}</h4>
                            <p>{element.content}</p></div>
                            
                        </div>
                        )
                    })}
                    {array.length===0 && (<Fragment><img className="review-empty" alt="empty" src={empty}></img></Fragment>)}
                </div>
            </div>
    )
}

export default Review