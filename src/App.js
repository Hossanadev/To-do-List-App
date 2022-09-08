import React, {useState} from 'react';
import "./App.css";


const App = () => {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {

    if (newItem === "") {
      alert("Add item")
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("")
  }

  const deleteItem = (id) => {
      const newToDo = items.filter(item => item.id !== id);
      setItems(newToDo)
  }

  return (

    <div className='app'>
      <div className='container'>
        <div>
            <h1 className='head-text'>
              To-do List
            </h1>
        </div>

        <div className='input'>
            <input type="text"
                   placeholder='Add item...'
                   value={newItem}
                   onChange={e => setNewItem(e.target.value)}
            />
       
            <button onClick={() => addItem()} className="add-item">Add Item</button>
        </div>
    
        <div className='items'>
            <ol>
              {items.map((item) => {
                return (
                  <li key={item.id}>{item.value}  <button className='delete-item' onClick={() => deleteItem(item.id)}>Delete</button></li>
                )
              })}
            </ol>
        </div>
      </div>
    </div>

  )

}

export default App;