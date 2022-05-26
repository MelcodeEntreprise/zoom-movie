import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';
import UiPagination from '../components/UiPagination';

const Home = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=6b40d7e2d922dcc0ef17a7aca8f9618c&page=${page}&language=fr-FR`);
        setContent(data.results);
    }

    
    useEffect(() => {
        fetchTrending();
    }, [page])


  return (
    <div className="page__display">
      <h1 className="page__title">Tendances du moment</h1>
      <div className="__page">
        { content && content.map((c) => (
          <Card key={c.id} id={c.id} 
          poster={c.poster_path} 
          title={c.title || c.name} 
          date={c.first_air_date || c.release_date} 
          media_type={c.media_type}
          vote_average={c.vote_average}
          overview={c.overview}
          />
        ))}
      </div>

      <UiPagination setPage={setPage} />
    </div>
  )
}

export default Home