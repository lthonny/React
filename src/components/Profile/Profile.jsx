import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="http://carsten.pl/images/slide/slidemount8.jpg" />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;