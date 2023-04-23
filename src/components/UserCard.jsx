import { useNavigate } from 'react-router-dom'

export const UserCard = ({ user, setUser }) => {
    const navigate = useNavigate()

    const impersonate = () => {
        setUser(user)
        navigate('/')
    }
    return (
        
        <section className="users-card">
        <div>
            <br>
            </br>
            <div class="flip-card">
            <button className="user-button" onClick={impersonate}>login as</button>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={user.avatar_url} alt="avatar" ></img>

                    </div>
                    <div class="flip-card-back">
                        <p>{user.name}</p>

                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
