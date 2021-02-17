import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function getJoke() {
      let response = await fetch(process.env.REACT_APP_API_URL, {
        headers: { accept: "application/json" },
      });

      let data = await response.json();
      console.log(data);
      setJoke(data.joke);
    }
    getJoke();
  }, []);

  return (
    <div className="App">
      <h1>{joke}</h1>
    </div>
  );
}

export default App;
