import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getSuperHeroDataById } from "./services";
import { SUPERHEROIDS } from "./mock";
import Layout from "./Layout";
import Search from "./containers/Search";
import Profile from "./containers/Profile";
import Error from "./containers/Error";

function App() {
  const [heros, setHeros] = useState([]);
  const [queries, setQueries] = useState({});

  const handleQuery = (query) => {
    setQueries((prev) => ({ ...prev, ...query }));
  };
  const fetchSuperHeroData = async (ids) => {
    const promises = ids.map((id) => getSuperHeroDataById(id));
    try {
      const results = await Promise.all(promises);
      setHeros(() => [...results]);
    } catch (error) {
      console.error("An error occurred while fetching superhero data:", error);
    }
  };
  useEffect(() => {
    fetchSuperHeroData(SUPERHEROIDS);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Search />} />
            <Route
              path="search"
              element={<Search heros={heros} setQuery={handleQuery} />}
            />
            <Route path="detail" element={<Profile heros={heros} />} />
            <Route path="*" element={<Error />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
