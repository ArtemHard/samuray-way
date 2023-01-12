import React from 'react'
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
    </div>
    <div className={`${style.item} + ${style.active}`}>
      <NavLink to="/dialogs">Messages</NavLink>
    </div>
    <div className={style.item}>
      <a>News</a>
    </div>
    <div className={style.item}>
      <a>Music</a>
    </div>
    <div className={style.item}>
      <a>Settings</a>
    </div>
  </nav>
  )
}
