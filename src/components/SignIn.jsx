import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api"

const SignIn = ({user, setUser}) => {
  const navigate = useNavigate()

// redirect back to home page if user already logged in

  useEffect(() => {
    if(user) {
        navigate('/')
    }
  }, [user])

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    return signIn(name).then(newUser => {
      setUser(newUser)
    })
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:&nbsp;&nbsp;</label>
      <input
        id="username"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <br />
      <br />
      <button type="submit" disabled={!name}>Log in</button>
    </form>
  );
};

export default SignIn;