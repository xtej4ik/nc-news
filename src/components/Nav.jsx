const Nav = ({ user, setUser }) => {

    const logout = () => {
        setUser(undefined)
    }
    if (user) {
        return (
            <div>
                <p>{user.name}</p>
                <img src={user.avatar_url} />
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (<div></div>)
    }

}

export default Nav;