import React, { Fragment, useEffect,useState} from "react"
import Nav from "./Nav"
import "./search_style.css"
import Cast from "./cast"
import Similar from "./similar"
import Review from "./review"
import { Redirect, withRouter } from "react-router"
import { getmovie, getvideo } from "../controller"
const Search = (props) =>{ 

    const [data, setdata] = useState([])
    const [video, setvideo] = useState([])
   
    const preload = (() => {
            if(props.location.state!==undefined){
                const id = props.location.state.id
                getmovie(id)
                .then(data1=>{
                    setdata(data1)
                    getvideo(id)
                    .then(data2=>{
                        setvideo(data2.results[0])
                    })
                })
                .catch(err=>console.log(err))
            }
            else{
                return <Redirect to={{pathname:"/"}} />
            }
            
        })

    const check = () =>{
        return video ? <iframe title="youtube" src={`https://www.youtube.com/embed/${video.key}`}></iframe> : <div></div>
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        preload()     
    },[props])
    
    return(
        <div>   
            {props.location.state !== undefined && (<Fragment>
                <Nav />
            <div className="search-div">
                <div data-aos="fade-left" className="search-details">
                    <div className="search-detail-name"><h1>{data.original_title}</h1><h5>{data.release_date},Duration {data.runtime}m</h5></div>
                    <div className="overview"><h2>Overview</h2><h5>{data.overview}</h5></div>
                    <div className="imdb"><h4>IMDB : {data.vote_average}({data.vote_count})</h4></div>
                </div>
                <div className="search-photo">
                    <div  className="background-photo">{check()}</div>
                    <img className="photo-poster" alt="Profile" src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}></img>
                </div>
            </div>
            <Cast movie_id={props.location.state.id} />
            <Review movie_id={props.location.state.id} />
            <Similar movie_id={props.location.state.id} />
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

            </Fragment>)}
            {props.location.state === undefined && (<Redirect to={{pathname:"/"}} />)}
            
        </div>
    )
}

export default withRouter(Search)