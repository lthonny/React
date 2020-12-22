import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Vayy" likesCount="25" />
                <Post message="Okey, frend" likeCount="29" />
                <Post message="Lol?" like="55" />
            </div>
        </div>
    )
}

export default MyPosts;