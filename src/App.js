import "./index.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onAddItem = () => {
    const value = input;
  
    setItems((prevItems) => [...prevItems, value]);
    setCount((prevCount) => prevCount + 1);
    setInput("");
  };

  return (
    <div>
      <header>
        <p >Added items: {count}</p>
        <input onChange={onChangeHandler} value={input} />
        <ul>
          {items.map((element, index) => (
            <li key={`${element}-${index}`}>{element}</li>
          ))}
        </ul>
        <button onClick={onAddItem}>Add TODO item</button>
      </header>
    </div>
  );
}

export default App;
