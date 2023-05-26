import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api"
import { ToastContainer, toast } from 'react-toastify';



const SignIn = ({ user, setUser }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const [name, setName] = useState("");



const handleSubmit = (event) => {
  event.preventDefault()
  return signIn(name).then(newUser => {
    if (!newUser) {
      toast("🦄 User not found")
    } 
    setUser(newUser)
  })
};


return (
  <div>
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <label htmlFor="username">Username:&nbsp;&nbsp;</label>
      <input
        id="username"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
    </form>
    <ToastContainer />
  </div>
);
};

export default SignIn;