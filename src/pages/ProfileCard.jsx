import { useContext } from "react";
import { UserProfile } from "../components/userContext";
import styles from "../Styles/styles.module.css"


export function ProfileCard() {
    const {user,theme,toggleTheme}= useContext(UserProfile)
    return (
      <div
        className={`${styles.card} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
        style={{ marginTop: "20px" }}
      >
        <img src={user.avatar} alt={user.name} className={styles.avatar} />

        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <button onClick={toggleTheme} className={styles.button}>
          Change Theme
        </button>
      </div>
    );
}