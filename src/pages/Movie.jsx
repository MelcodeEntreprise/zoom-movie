import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';
import UiPagination from '../components/UiPagination';


const Movie = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [search, setSearch] = useState('family');


  const fetchMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6b40d7e2d922dcc0ef17a7aca8f9618c&query=${search}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}}&language=fr-FR`)
    setContent(data.results);
    setNumOfPages(data.total_pages);
  }

  useEffect(() => {
    fetchMovies();
  }, [page, search])

  return (
    <div className="page__display">
      <h1 className="page__title">Films</h1>
        <form className="form__display">
          <input type="text" placeholder="Entrez titre film" id="search-input" onChange={(e) => setSearch(e.target.value)}/>
        </form>
       <div className="__page">
        { content && content.map((c) => (
          <Card key={c.id} id={c.id} 
          poster={c.poster_path} 
          title={c.title || c.name} 
          date={c.first_air_date || c.release_date} 
          media_type="movie"
          vote_average={c.vote_average}
          overview={c.overview}
          />
        ))}
      </div>

     {numOfPages > 1 && (
        <UiPagination setPage={setPage} numOfPages={numOfPages} />
     )}
    </div>
  )
}

export default Movie