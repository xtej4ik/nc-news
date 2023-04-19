import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api"

const SignIn = ({user, setUser}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
        navigate('/')
    }
  }, [user, navigate])

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    return signIn(name).then(newUser => {
      setUser(newUser)
    })
  };


  return (
    <form onSubmit={handleSubmit}>
      <br/>
      <br/>
      <label htmlFor="username">Username:&nbsp;&nbsp;</label>
      <input
        id="username"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
    </form>
  );
};

export default SignIn;