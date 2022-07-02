import React, {useEffect, useState} from 'react';
import Tile from "../Tile/Tile";
import './Tiles.css'

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const Tiles = (props) => {

    const topURL = props.url;
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        let res = [];
        console.log('lodee');
        fetch(topURL).then(res => res.json()).then(data => {
            data.results.forEach(topmovie => {
                const {id, name, title, poster_path, vote_average, release_date, genre_ids,overview} = topmovie;
                res.push(<Tile changeRoute={(routeName)=>{ props.setId(id); props.changeRoute(routeName);}}  key={id} url={IMG_URL + poster_path} movieName={title==null?name:title} overview={overview}/>);
            });
            setTiles(res);
        });
    }, [])


    return (
        <div className="tiles-container">
            {tiles}
        </div>
    );
};

export default Tiles;