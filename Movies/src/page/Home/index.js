import React, { useState, useEffect } from "react";
import "./style.scss";
import { getData } from "../../api/api.js";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const data = await getData();
    if (data !== undefined) {
      setMovies(data);
    } else {
      console.log("Мы не получили данных");
    }
  };
  console.log("movies :>> ", movies);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
