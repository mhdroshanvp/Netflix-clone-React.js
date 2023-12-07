import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { imageUrl, baseUrl } from '../../Constants/Constants';
import './Rowpost.css';
import { API_KEY } from '../../Constants/Constants';
import YouTube from 'react-youtube';

function Rowpost(props) {


  



  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        alert('Network error. Please try again later.');
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0].key);
          setShowVideo(true);
        } else {
          console.log('Trailer not available');
        }
      })
      .catch((error) => {
        console.error("Error fetching movie videos:", error);
      });
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) => (
            <img onClick={() => handleMovie(obj.id)}
              key={obj.id}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl}${obj.poster_path}`}
              alt="poster"
            />
          ))
        }
      </div>

      {showVideo && (
        <div>
          <YouTube opts={opts} videoId={urlid} />
          <button onClick={closeVideo}>Close Video</button>
        </div>
      )}
    </div>
  );
}

export default Rowpost;
