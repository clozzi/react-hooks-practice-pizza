import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [editPizza, setEditPizza] = useState({})

  function handleEditClick(pizza) {
    setEditPizza(pizza)
    console.log(pizza)
  }

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(data => setPizzas(data))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} />
      <PizzaList pizzas={pizzas} handleEditClick={handleEditClick}/>
    </>
  );
}

export default App;
