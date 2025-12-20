import { createContext, useState } from "react";

export const UserProfile = createContext();

export function UserProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const user = {
    name: "Seif Elrahman",
    email: "seif@gmail.com",
    avatar: "https://picsum.photos/200",
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <UserProfile.Provider value={{ user, theme, toggleTheme }}>
      {children}
    </UserProfile.Provider>
  );
}
