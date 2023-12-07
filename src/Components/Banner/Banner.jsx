import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../Constants/Constants';
import './Banner.css';
import axios from 'axios';

function Banner() {
  const [trendingData, setTrendingData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setTrendingData(response.data.results[2]); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const title = loading ? "Loading..." : (trendingData && trendingData.name) || "No title available";

  const description = loading ? "" : (trendingData && trendingData.overview) || "No overview available"
  const backgroundImageUrl = trendingData ? `https://image.tmdb.org/t/p/original${trendingData.backdrop_path}` : '';

  return (
    <div className='Banner' style={{backgroundImage: `url(${backgroundImageUrl})`}}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <div className="banner-buttons">
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{description}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
