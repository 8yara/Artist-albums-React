import { NavLink } from "react-router-dom";

let ArtistItem = (props) => {
    // console.log(props.artistInfo)
    let Artist = props.artistInfo;
    return (
        <div>
            <div className="card w-75 align-content-center m-2 border-dark" >
                <img className="card-mg-top"  alt="Card image cap" src={`imagesDay3/covers/${Artist.cover}.jpg`}/>
                <div className="card-body thumbnail">
                    <h3 className="card-title caption">
    
                        <h3 className="text-dark"><NavLink to={`/artists/${Artist.id}`}>{Artist.name}</NavLink></h3>
                     
                    </h3>
                </div>
            </div>
            </div>
    )
}

export default ArtistItem;