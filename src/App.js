import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("some");
  function increment() {
    setLikes(likes + 1)
  }
  function decrement() {
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h1>Liked: {likes}</h1>
      <h2>Text in input: {value}</h2>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
      <input 
        type = "text"
        value = {value}
        onChange = {event => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
