import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle"
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Comments from "./components/Comments";


function App() {

  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  function navigateAllArticles() {
    navigate("/");
  }

   return (
    <div className="App">
      <div className="div1">
        <button className="homebutton" id="HomeButton" onClick={navigateAllArticles}>
          Home
        </button>
      </div>
      <Header />
      <Nav  user={user} setUser={setUser}/>
      <Routes>
        <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/" element={<AllArticles user={user} />} /> 
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
        <Route path="/articles/:article_id/comments" element={<Comments/>} />
      </Routes>
    </div>
  );
}


export default App;
