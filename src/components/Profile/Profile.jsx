import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://ic.pics.livejournal.com/brerra66it/16874173/323006/323006_900.jpg" />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;