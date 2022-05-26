import { Badge } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { img_500, unavailable } from './Config';
import axios from 'axios';


const Card = ({id, poster, title, date, media_type, vote_average, overview}) => {


  const [video, setVideo] = useState();
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=6b40d7e2d922dcc0ef17a7aca8f9618c&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
  })


  return (
    <div className="card__display" media_type={media_type} id={id}>
        <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
        <img src={ poster ? `${img_500}/${poster}` : unavailable} alt={title} />
        <h2>{title}</h2>
       <div className="card__span">
        <span className="card__type">{media_type === "tv" ? "Serie" : "Film"}</span>
        <span className="card__date">{date}</span>
       </div>

       <div className="card__content">
         <p>{overview}</p>
         <a target="__blank" href={`https://www.youtube.com/watch?v=${video}`}>Regarder le trailer</a>
       </div>
      
    </div>
  )
}

export default Card