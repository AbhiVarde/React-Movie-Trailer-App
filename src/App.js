import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App() {

  const [video, setVideo] = useState("Panchayat");
  const [videoURL, setVideoURL] = useState("https://youtu.be/mojZJ7oeD_g");

  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  return (
    <div className="App">
      <div className='search'>
        <label>
          Search for any movies/shows : { " " }
        </label>
        <input type="text" 
          onChange={(e) => { setVideo(e.target.value) }}>
        </input>
        &nbsp; &nbsp; &nbsp; 
        <button onClick={() => {handleSearch()}}>
          Search 
        </button>
        <br>
      </div>
      <ReactPlayer url={videoURL} controls={true} />
    </div>
  );
}

export default App;
