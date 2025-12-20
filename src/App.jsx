import Todoapp from './pages/todoapp'
import './App.css'
import Product from "./pages/Product";
import { ProfileCard } from './pages/ProfileCard';
import { UserProvider } from "./components/userContext";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';

function App() {

  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/todo" Component={Todoapp} />
        <Route path="/profile" Component={ProfileCard} />
        <Route path="/products" Component={Product} />
      </Routes>
    </UserProvider>
  );
}

export default App
