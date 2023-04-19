import { useNavigate } from 'react-router-dom'
import '../styles.css'
const Nav = ({ user, setUser }) => {

    const logout = () => {
        setUser(undefined)
    }
    const navigate = useNavigate()
    if (user) {
        return (
            <div className='navbar'>
                <p>{user.name}</p>
                <img className="avatar" alt="avatar" src={user.avatar_url} />
                <button className="login-button" onClick={logout}>Logout </button>
            </div>
        )
    } else {
        return (<div className='navbar'><button className="login-button" onClick={() => navigate('/sign-in')}>Login</button></div>)
    }

}

export default Nav;