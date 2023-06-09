import { useEffect, useMemo, useState } from "react";
import AppContext from "./Index";

// Api: https://swapi.dev/
import fetchPlanetsStarWars from "../Api/FetchApi";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [starWarsPlanets, setPlanets] = useState([]);
  const [isLoading, setBoolean] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const planets = await fetchPlanetsStarWars();
      setPlanets(planets);
      setBoolean(false);
    };
    fetchApi();
  }, []);

  const contextValue = useMemo(() => ({
    starWarsPlanets,
    setPlanets,
    isLoading,
    setBoolean
  }), [starWarsPlanets, setPlanets, isLoading, setBoolean]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

