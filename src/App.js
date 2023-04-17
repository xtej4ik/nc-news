import './App.css';
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import AllArticles from "./components/AllArticles";
import { Route, Routes } from "react-router-dom";
import {  useState } from "react";
import Nav from './components/Nav';

function App() {

  const [user, setUser] = useState(undefined);

   return (
    <div className="App">
      <Header />
      <Nav  user={user} setUser={setUser}/>
      <Routes>
        <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/" element={<AllArticles user={user} />} />
      </Routes>
    </div>
  );
}


export default App;
