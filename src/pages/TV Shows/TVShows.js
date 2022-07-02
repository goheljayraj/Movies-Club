import React from 'react';
import Tiles from "../../components/Tiles/Tiles";

const TvShows = () => {
    return (
        <div>
            <Tiles url={'https://api.themoviedb.org/3/tv/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'}/>

        </div>
    );
};

export default TvShows;