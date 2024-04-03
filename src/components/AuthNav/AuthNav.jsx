import styles from "../AppBar/AppBar.module.css"

export default function AuthNav(){
    return (
        <div className={styles.auth}>
           <button>Register</button>
           <button>LogIn</button>
        </div>
    )
}