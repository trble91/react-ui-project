import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {

const baseURL = "https://hp-api.onrender.com/api/characters"
const [characters, setCharacters] = useState([]);


useEffect(() => {
  axios.get(baseURL)
  .then(response => setCharacters(response.data))
  .catch(err => console.log(err))
}, []);

const getCharacters = () => {
  const response = fetch(baseURL)
    .then(response => response.json)
    .then(data => setCharacters(response.data))
    .catch(err => console.log(err))
 
  console.log(response)
}
return (
  <>
  
  </>
)
}

export default FetchData