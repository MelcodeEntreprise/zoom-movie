import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function LabelBottomNavigation(){

  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if(value === "0") navigate('/');
    else if (value === "1") navigate('/films');
    else if (value === "2") navigate('/series');
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <BottomNavigation className="navigation__buttons" sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        style={{ color : "#0B162C" }}
        label="Tendances"
        value= "0"
        icon={<TrendingUpIcon />}
      />
      <BottomNavigationAction
        style={{ color : "#0B162C" }}
        label="Films"
        value= "1"
        icon={<LocalMoviesIcon />}
      />
      <BottomNavigationAction
        style={{ color : "#0B162C" }}
        label="Séries"
        value="2"
        icon={<LiveTvIcon />}
      />
    </BottomNavigation>
  );
}



