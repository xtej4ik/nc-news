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
                <button className="login-button" onClick={logout}>Logout </button>
                <button className="login-button" onClick={() => navigate('/all-users')}>User List</button>
                <div className='logged-in-user-container'>
                    <p>{user.name}</p>
                    <img className="avatar" alt="avatar" src={user.avatar_url} />
                </div>
            </div>
        )
    } else {
        return (
            <div className='navbar'>
            
                <button className="login-button" onClick={() => navigate('/all-users')}>Login as</button>
            </div>)
    }

}

export default Nav;