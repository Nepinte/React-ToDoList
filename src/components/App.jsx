import React, { useState } from "react";
import ToDoItems from "./ToDoItems"; 

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  //Change Attributes
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  
  // Adding Items
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  //Delet Items
  function deletItem(id){
      setItems((preItems)=>{
        return preItems.filter(
          (item, index) => {
            return index !== id;
          }
        )
      })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {items.map((todoItem, index )=> (
            <ToDoItems 
            key = {index}
            id = {index}
            text = {todoItem}
            onChecked = {deletItem}/>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
