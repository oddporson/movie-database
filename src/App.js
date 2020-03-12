import React, { useState } from 'react';
import axios from  'axios';

import Search from "./components/Search"
import Results from "./components/Results"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })

 const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=648e557b";

 const search = (e) => {
   if (e.key === "Enter") {
    axios(apiUrl + "&s=" + state.s)
      .then(( { data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
   }
 }

 const handleInput = (e) => {
   let s = e.target.value; 

   setState(prevState => {
     return {...prevState, s: s}
   })

   console.log(state.s);
 }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1> 
      </header>
      <main>
        <Search handleInput={handleInput} search={search} /> 
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
