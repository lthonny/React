import React from 'react';
import s from'./Navbar.module.css';
// console.log(s);

// let s = {
//     'nav': 'Navbar_nav__30-aT',
//     'item': 'Navbar_item__3HvW_',
//     'active': 'Ddadv_active',
// }

// let c1 = "item";
// let c2 = "active";
// "item active"
// let s = c1 + " " + c2;
// let s = `${s.item} ${s.active}`;

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <div className={s.item}>
            <a>Профиль</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Сообщения</a>
        </div>
        <div className={s.item}>
            <a>Новости</a>
        </div>
        <div className={s.item}>
            <a>Музыка</a>
        </div>
        <div className={s.item}>
            <a>Настройки</a>
        </div>
    </nav>
    )
}

export default Navbar;