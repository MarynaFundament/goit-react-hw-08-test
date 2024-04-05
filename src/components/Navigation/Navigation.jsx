import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../Navigation/Navigation.module.css"

export default function Navigation (){
    return (
        <nav className={styles.nav}>
            <NavLink
            to = "/"
            > 
                Home
             </NavLink>

            <NavLink
            to = "/movies"
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
