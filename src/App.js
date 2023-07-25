import React from 'react';
import ClassCounter from './components/ClassCounter';
import "./styles/App.css"
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <PostItem post = {{id: 1, title: 'Javascript', body: 'Description'}}/>
      <PostItem post = {{id: 2, title: 'Java', body: 'Des'}}/>      
    </div>
  );
}

export default App;
