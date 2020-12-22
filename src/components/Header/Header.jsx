import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                {/* <img src="https://pngimage.net/wp-content/uploads/2018/06/your-logo-png-1.png"/> */}
                {/* <img src="https://spng.pngfind.com/pngs/s/420-4205297_file-rbk-logo-svg-hd-png.png" /> */}
                LOGO
            </div>
        </header>
    )
}

export default Header; 