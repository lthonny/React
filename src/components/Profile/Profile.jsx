import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Roland_logo.svg/1200px-Roland_logo.svg.png" />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;