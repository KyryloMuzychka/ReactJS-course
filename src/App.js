import React, { useMemo, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import "./styles/App.css"
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButtton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'b' },
    { id: 2, title: 'c', body: 'c' },
    { id: 3, title: 'b', body: 'a' },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts worked')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <ClassCounter/>
      <MyButtton style={{marginTop: 30}} onClick={()=>setModal(true)}>
        Create post
      </MyButtton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>      
      <hr style={{ margin: '15px 0' }} /> 
      <PostFilter filter={filter} setFilter={setFilter}/>                   
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of items 1" />                                   
    </div>
  );

}

export default App;
