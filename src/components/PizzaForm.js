import React, { useState } from "react";

function PizzaForm({ editPizza }) {
  const [pizzaTopping, setPizzaTopping] = useState('Pizza Topping');
  const [pizzaSize, setPizzaSize] = useState(null);
  const [isVegetarian, setIsVegetarian] = useState(false);

  function handleToppingChange(e) {
    setPizzaTopping(e.target.value)
  }

  function handleSizeChange(e) {
    setPizzaSize(e.target.value)
  }

  function handleVegChange(e) {
    setIsVegetarian(e.target.value)
  }

  function handleSubmit(e) {
    console.log(editPizza)
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${editPizza.id}`, {
      headers: {
        "Content-type": "application/json"
      },
      method: "PATCH",
      body: ({
        topping: pizzaTopping,
        size: pizzaSize,
        vegetarian: isVegetarian
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={editPizza.topping}
            onChange={handleToppingChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleSizeChange} value={editPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleVegChange}
              checked={editPizza.isVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleVegChange}
              checked={editPizza.isVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
