import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {selectIsLoggedIn} from "../../redux/auth/selector"

import styles from "../Navigation/Navigation.module.css"

export default function Navigation (){
const isLoggedIn = useSelector(selectIsLoggedIn)
//додати тернарник 50 хв
    return (
        <nav className={styles.nav}>
            <NavLink
            to = "/"
            > 
                Home
             </NavLink>

            <NavLink
            to = "/tasks"
            >
                Movies 
            </NavLink>

            <NavLink
            to = "/register"
            > 
                Register
             </NavLink>


             <NavLink
            to = "/login"
            > 
                Login
             </NavLink>

        </nav>
    )
}
