import { useContext, useEffect, useState } from "react";
import { CFooter, CHeader } from "../components/Index";

// Context
import AppContext from "../context/Index";

// Interface
import { IPlanet } from "../interfaces/IPlanet";

const Home = () => {
  const context = useContext(AppContext);

  const [userName, setUserName] = useState('');

  const [searchByName, setBySearch] = useState([]);

  useEffect(() => {
    try {
      const { name } = JSON.parse(localStorage.getItem('sucess_login') || '{}');
      setUserName(name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = event;
    let newArr;

    switch (name) {
      case 'search-input':
        newArr = context?.starWarsPlanets.filter((i: IPlanet) => {
          const planetNameLowerCase = i.name.toLowerCase();
          const valueLowerCase = value.toLowerCase().substring(0, 2);

          return planetNameLowerCase.substring(0, 2).includes(valueLowerCase);
        });
        setBySearch(newArr as never);
        break;
      default:
        break;
    }
  };

  return (
    context?.isLoading ? (<span>Loading...</span>) : (
      <div>
        <CHeader userName={userName} />
        <main
          className="h-screen"
        >
          <input
            type="text"
            name="search-input"
            className="shadow border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Search"
            onChange={onChangeFunction}
          />
          <table>
            <thead>
              <tr>
                <th>Nome:</th>
                <th>Rotation Period:</th>
                <th>Orbital Period:</th>
                <th>Climate:</th>
                <th>Population:</th>
                <th>Diameter:</th>
              </tr>
            </thead>
            {
              searchByName.length >= 1 ? (searchByName.map((p: IPlanet, index: number) => {
                return (
                  <tbody
                    key={index}
                  >
                    <tr>
                      <td>{p.name}</td>
                      <td>{p.rotation_period}</td>
                      <td>{p.orbital_period}</td>
                      <td>{p.climate}</td>
                      <td>{p.population}</td>
                      <td>{p.diameter}</td>
                    </tr>
                  </tbody>
                );
              })) : (context?.starWarsPlanets.map((p: IPlanet, index: number) => {
                return (
                  <tbody
                    key={index}
                  >
                    <tr>
                      <td>{p.name}</td>
                      <td>{p.rotation_period}</td>
                      <td>{p.orbital_period}</td>
                      <td>{p.climate}</td>
                      <td>{p.population}</td>
                      <td>{p.diameter}</td>
                    </tr>
                  </tbody>
                );
              })
              )}
          </table>
        </main>
        <CFooter />
      </div >
    )
  );
};

export default Home;