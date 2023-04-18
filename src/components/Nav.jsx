import '../styles.css'
const Nav = ({ user, setUser }) => {

    const logout = () => {
        setUser(undefined)
    }
    if (user) {
        return (
            <div>
                <p>{user.name}</p>
                <img class="avatar" src={user.avatar_url} />
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (<div></div>)
    }

}

export default Nav;