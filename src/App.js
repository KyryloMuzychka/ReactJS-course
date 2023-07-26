import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import "./styles/App.css"
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])
  return (
    <div className="App">
      <ClassCounter/>
      <PostList posts={posts} title="List of items 1"/>
      <PostList posts={posts} title="List of items 2"/>
    </div>
  );

}

export default App;
