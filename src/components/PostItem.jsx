import React from 'react';
import MyButtton from './UI/button/MyButton';

const PostItem = (props) => {    
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                   {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <div>
                    <MyButtton onClick={() => props.remove(props.post)}>
                        Delete
                    </MyButtton>
                </div>
            </div>
        </div>
    )
}

export default PostItem;