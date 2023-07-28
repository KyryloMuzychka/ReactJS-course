import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import ClassCounter from './components/ClassCounter';
import "./styles/App.css"
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButtton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './components/API/PostService';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect( () => {
    console.log('hi')
    fetchPosts()
  }, [])

  async function fetchPosts() {    
    const posts = await PostService.getAll()
    setPosts(posts)
  } 

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <ClassCounter />
      <button onClick={fetchPosts}>Get posts</button>
      <MyButtton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButtton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of items 1" />
    </div>
  );

}

export default App;
