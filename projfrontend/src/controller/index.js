

export const popular=()=>{
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone => respone.json())
    .catch(err=>console.log(err))
}

export const ratedfetch = ()=>{
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    }).then(respone=>{
        return respone.json()
    })
    .catch(err => console.log(err))
}


export const nowplaying = ()=>{
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    }).then(respone=>{
        return respone.json()
    })
    .catch(err => console.log(err))
}



export const Upcomingfetch = ()=>{
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone => {
        return respone.json()
    })
    .catch(err => console.log(err))
}


export const getmovie = (id) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone=>{
        return respone.json()
    })
    .catch(err=>console.log(err))
}

export const getvideo= (id) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone=>{
        return respone.json()
    })
    .catch(err=>console.log(err))
}

export const getcast = (id)=>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone=>{return respone.json()})
    .catch(err=>console.log(err))
}

export const getsimilar = (id)=>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone=>{return respone.json()})
    .catch(err=>console.log(err))
}

export const getreview = (id)=>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_KEY}`,{
        method:"GET"
    })
    .then(respone=>{return respone.json()})
    .catch(err=>console.log(err))
}


export const getsearchresult = (keyword) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${keyword}`,{
        method:"GET"
    })
    .then(respone=>{return respone.json()})
    .catch(err=>console.log(err))
}

export const getmore = (title) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${title}?api_key=${process.env.REACT_APP_KEY}&page=2`,{
        method:"GET"
    })
    .then(respone=>{return respone.json()})
    .catch(err=>console.log(err))
}