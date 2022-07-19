import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WebFont from 'webfontloader';

import { ImageList ,ImageListItem } from '@mui/material';

let ArtistDetails = () => {
    let { id } = useParams();
    let [artist, setArtist] = useState({})
    let i = 0;
    useEffect(() => {
        fetch(`http://localhost:3003/artists/${id}`)
            .then((res) => { return res.json() })
            .then((data) => { setArtist(data) })
            .catch((err => { }))
    }, [])
    let getAlbumPics = (artist) => {
        return artist.albums.map((album) => {
            return (
                <img src={`/imagesDay3/albums/${album.cover}.jpg`} />

            )
        })
    }
    if (artist.name) {
        return (
           
            <div className="card w-90 justify-content-center m-2 border-dark bg-secondary">
            <div className="container bg-light card-body  bg-primary bg-opacity-50 ">
            <h1 className=" font-link"><a className="text-dark " href="/artists">Music Db</a></h1>
            <hr/>
                <img className="img-thumbnail det-img" src={`/imagesDay3/covers/${artist.cover}.jpg`} />
                <h1>{artist.name}</h1>
                <div className=" d-flex justify-content-center ">
                    <p className="">{artist.bio}</p>
                </div>
                <div className=" d-flex justify-content-center">
                    <ImageList sx={{ width: 400, height: 450 }} cols={2} rowHeight={164}>
                        {artist.albums?.map((item) => (
                            <ImageListItem key={item.albumId}>
                                <img
                                    src={`/imagesDay3/albums/${item.cover}.jpg?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`/imagesDay3/albums/${item.cover}.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    {/* {getAlbumPics(artist)} */}

                </div>


                </div>
            </div>
        )
    } else {
        return (
            <div>Not Found</div>
        )
    }
}

export default ArtistDetails;