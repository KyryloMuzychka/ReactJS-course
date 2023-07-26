import React, {useState} from 'react';
import MyButtton from "../components/UI/button/MyButton"
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
        {/* console.log(bodyInputRef.current) */}
      }

    return (
        <form>
            {/* Управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Name of post"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Description"
            />
            {/* 
            Неуправляемый\Неконтролируемый компонент        
            <MyInput 
                ref={bodyInputRef}
                type="text"
                placeholder="Description"
            />
            */}
            <MyButtton onClick={addNewPost}>Create post</MyButtton>
        </form>
    )
}

export default PostForm;