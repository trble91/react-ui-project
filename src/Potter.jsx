import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../react-ui-project/src/App.css';

const baseURL = "https://hp-api.onrender.com/api/characters";

function Potter(props) {
  const [characters, setCharacters] = useState([]);
  const [showDisplay, setShowDisplay] = useState(false);

  const handleDisplay = () => {
    setShowDisplay(prevShowDisplay => !prevShowDisplay)
  }
  
  const getCharacters = async () => {
    const res = await axios.get(baseURL);
    setCharacters(res.data);
  };

  useEffect(()=> {
    setShowDisplay();
  }, []);

  useEffect(() => {
    getCharacters();
  }, []);

  const displayData = (e) => {
    getCharacters();
    setShowDisplay(!showDisplay);
  
  };

  console.log(displayData)
  return (
    <>

<header>
        <nav className="nav">
          <button className="menu" aria-label="Main Menu" onClick={handleDisplay}>
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <ul className="characters menu-display">
            {characters.map((character) => (
              <li key={character.name} onClick={() => setShowDisplay(character)}>
                {character.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="char-info">
        {showDisplay && (
          <>
            <h2>{showDisplay.name}</h2>
            <img src={showDisplay.image} alt={showDisplay.name} />
            <p>{showDisplay.house}</p>
            <p>{showDisplay.species}</p>
            <p>{showDisplay.gender}</p>
          </>
        )}
      </div>    </>
  );
}

export default Potter;
