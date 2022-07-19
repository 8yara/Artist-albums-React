import { Component } from "react";
import ArtistItem from "./Artist-item";
import pagename from "./pageitemname";


class Artists extends Component{
    constructor(){
        super();
        this.state={
            artistsList:[],
            errorMsg:""
        }
    }

    getArtists=({artistsList,errorMsg})=>{
        if(artistsList.length>0){
            return this.state.artistsList.map((artist)=>{
                return (<ArtistItem key={artist.id} artistInfo={artist}/>)
            })
        }
        else if(errorMsg.length !=0) {
            return(
                <div>
                    {errorMsg}
                </div>
            )
        }
        else{
            return(
                <div>No Artist Found</div>
            )
        }   
       
    }


    componentDidMount(){
        fetch('http://localhost:3003/artists')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            this.setState({artistsList:data})
            this.setState({errorMsg:""})
        })
        .catch((err)=>{this.setState({errorMsg:"Error occured"})})
    }
    render(){
        return(
            <div className="bg-light align-content-center me">
                <h1 className="display-3">Browse the artists</h1>
               {this.getArtists(this.state)}
            </div>
        )
    }
}
export default Artists;