import { useEffect, useState } from "react";
import "./App.css";
import { getSuperHeroDataById } from "./services";
import { superHeroIds } from "./mock";

function App() {
  const [heros, setHeros] = useState([]);
  const fetchSuperHeroData = async (ids) => {
    const promises = ids.map((id) => getSuperHeroDataById(id));
    try {
      const results = await Promise.all(promises);
        setHeros(()=>[...results])
    } catch (error) {
      console.error("An error occurred while fetching superhero data:", error);
    }
  };
  useEffect(() => {
    fetchSuperHeroData(superHeroIds);
  }, []);
  return <div className="App">
    
  </div>;
}

export default App;
