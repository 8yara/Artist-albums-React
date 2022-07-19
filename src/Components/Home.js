import WebFont from 'webfontloader';
let Home = ()=>{
    
    return (
        <div className="thumbnail font-link">
            <img className="bg-img col-12" src="cover.png"/>
            <div className="caption">
                <h1><a className="text-light" href="/artists">Music Db</a></h1>
            </div>
        </div>
    )
 
}

export default Home;