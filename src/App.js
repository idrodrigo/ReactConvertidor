import "./App.css";
import { useState } from "react";

const App = () => {
  const coins = [
    {
      moneda: "Euro",
      cambio: 1,
    },
    {
      moneda: "Peso argentino",
      cambio: 118.6,
    },
    {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    },
    {
      moneda: "Peso mexicano",
      cambio: 23.2,
    },
    {
      moneda: "Dólar",
      cambio: 1.14,
    },
  ];

  const changeCoin = (e) => {
    setIns(e.target.value);
    setRes1(e.target.value * coins[1].cambio);
    setRes2(e.target.value * coins[2].cambio);
    setRes3(e.target.value * coins[3].cambio);
    setRes4(e.target.value * coins[4].cambio);
  };

  const [res1, setRes1] = useState();
  const [res2, setRes2] = useState();
  const [res3, setRes3] = useState();
  const [res4, setRes4] = useState();
  const [ins, setIns] = useState();

  return (
    <>
      <label htmlFor="u0">{coins[0].moneda}</label>
      <input id="u0" type="number" value={ins} onChange={changeCoin} />

      <label htmlFor="u1">{coins[1].moneda}</label>
      <input id="u1" type="number" value={res1} readOnly />
      <label htmlFor="u2">{coins[2].moneda}</label>
      <input id="u2" type="number" value={res2} readOnly />
      <label htmlFor="u3">{coins[3].moneda}</label>
      <input id="u3" type="number" value={res3} readOnly />
      <label htmlFor="u4">{coins[4].moneda}</label>
      <input id="u4" type="number" value={res4} readOnly />
    </>
  );
};

export default App;
