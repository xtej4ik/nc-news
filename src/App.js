import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle"
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Comments from "./components/Comments";
import { UserContext } from "./contexts/User";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./components/Footer";

import 'react-toastify/dist/ReactToastify.css';
import UserList from "./components/UserList";

function App() {

  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      toast(`🦄 Hello ${user.username}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }, [user])


  function navigateAllArticles() {
    navigate("/");
  }

   return (
    <UserContext.Provider value={user}>
      <div className="App">
        <div className="div1">
          <button className="home-button" id="HomeButton" onClick={navigateAllArticles}>
            Home
          </button>
          <button className="login-button" onClick={() => navigate('/topics')}>Coding</button>
             <button className="login-button" onClick={() => navigate('/topics')}>Football</button>
             <button className="login-button" onClick={() => navigate('/topics')}>Cooking</button>
        </div>
        <Header />
        <Nav  user={user} setUser={setUser}/>
        <Routes>
          <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} />} />
          <Route path="/" element={<AllArticles user={user} />} /> 
          <Route path="/articles/:article_id" element={<SingleArticle/>} />
          <Route path="/articles/:article_id/comments" element={<Comments/>} />
          <Route path="/all-users" element={<UserList setUser={setUser}/>} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </UserContext.Provider>

  );
}


export default App;
