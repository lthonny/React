import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Roland_logo.svg/1200px-Roland_logo.svg.png" />
            </div>
            <div>
                ava + desc
            </div>
            <div>
                my posts
            <div>
                new post
            </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;