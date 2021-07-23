import React,{useEffect} from "react"
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css";

import Home from "./core/Home"
import Search from "./core/search";
import SearchByTitle from "./core/searchbytitle";
import ShowMorePopular from "./core/showmore_popular";
import ShowMoreRated from "./core/showmore_rated";
import ShowMoreUpcoming from "./core/showmore_upcoming";
import ShowMoreNowPlaying from "./core/showmore_nowplaying";

const Routes = ()=>{

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/title" component={SearchByTitle}></Route>
                <Route exact path="/popular/more" component={ShowMorePopular}></Route>
                <Route exact path="/rated/more" component={ShowMoreRated}></Route>
                <Route exact path="/upcoming/more" component={ShowMoreUpcoming}></Route>
                <Route exact path="/nowplaying/more" component={ShowMoreNowPlaying}></Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;
