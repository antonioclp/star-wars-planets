import { useContext, useEffect, useState } from "react";
import { CFooter, CHeader } from "../components/Index";

// Context
import AppContext from "../context/Index";

// Interface
import { IPlanet } from "../interfaces/IPlanet";

const Home = () => {
  const context = useContext(AppContext);

  const [userName, setUserName] = useState("");
  const [searchByName, setBySearch] = useState<IPlanet[]>([]);

  useEffect(() => {
    try {
      const { name } = JSON.parse(localStorage.getItem("sucess_login") || "{}");
      setUserName(name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    let newArr;

    switch (name) {
      case "search-input":
        newArr = context?.starWarsPlanets.filter((i: IPlanet) => {
          const planetNameLowerCase = i.name.toLowerCase();
          const valueLowerCase = value.toLowerCase().substring(0, 2);

          return planetNameLowerCase.substring(0, 2).includes(valueLowerCase);
        });
        setBySearch(newArr as IPlanet[]);
        break;
      default:
        break;
    }
  };

  return context?.isLoading ? (
    <span>Loading...</span>
  ) : (
    <div>
      <CHeader userName={userName} />
      <main className="h-screen p-4">
        <input
          type="text"
          name="search-input"
          className="shadow border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 p-2"
          placeholder="Search"
          onChange={onChangeFunction}
        />
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="py-2 px-4 border-b">Nome:</th>
              <th className="py-2 px-4 border-b">Rotation Period:</th>
              <th className="py-2 px-4 border-b">Orbital Period:</th>
              <th className="py-2 px-4 border-b">Climate:</th>
              <th className="py-2 px-4 border-b">Population:</th>
              <th className="py-2 px-4 border-b">Diameter:</th>
            </tr>
          </thead>
          <tbody>
            {searchByName.length >= 1
              ? searchByName.map((p: IPlanet, index: number) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{p.name}</td>
                    <td className="py-2 px-4 border-b">{p.rotation_period}</td>
                    <td className="py-2 px-4 border-b">{p.orbital_period}</td>
                    <td className="py-2 px-4 border-b">{p.climate}</td>
                    <td className="py-2 px-4 border-b">{p.population}</td>
                    <td className="py-2 px-4 border-b">{p.diameter}</td>
                  </tr>
                ))
              : context?.starWarsPlanets.map((p: IPlanet, index: number) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{p.name}</td>
                    <td className="py-2 px-4 border-b">{p.rotation_period}</td>
                    <td className="py-2 px-4 border-b">{p.orbital_period}</td>
                    <td className="py-2 px-4 border-b">{p.climate}</td>
                    <td className="py-2 px-4 border-b">{p.population}</td>
                    <td className="py-2 px-4 border-b">{p.diameter}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </main>
      <CFooter />
    </div>
  );
};

export default Home;
