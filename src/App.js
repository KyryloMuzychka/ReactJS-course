import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import "./styles/App.css"
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButtton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'b' },
    { id: 2, title: 'c', body: 'c' },
    { id: 3, title: 'b', body: 'a' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <ClassCounter />
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange = {sortPosts}
          defaultValue="Sort By"
          options={[
            {value: 'title', name: 'Title'},
            {value: 'body', name: 'Desciption'}
        ]}

        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title="List of items 1" />
        :
        <h1 style={{ textAlign: 'center' }}>
          Not found
        </h1>
      }
    </div>
  );

}

export default App;
