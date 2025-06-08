import React, { useState } from 'react';
import TextField from './TextField'; 
import TodoList from './Components/TodoList';

function App() {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
  setInputValue(e.target.value);
  
  };
  
  return (
    < div ClassName="App">
      
      <h1>TaskMaster App</h1>
      <TodoList />
      <h1>Text: {inputValue}</h1>
      <TextField value={inputValue} onChange={handleChange} />

      </div>
      


    
);
}


    

export default App;
 
