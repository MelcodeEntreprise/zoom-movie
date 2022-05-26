import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Serie from "./pages/Serie";
import LabelBottomNavigation from './components/Navigation';

function App() {

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Movie />} />
          <Route path="/series" element={<Serie />} />
        </Routes>
        <LabelBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
