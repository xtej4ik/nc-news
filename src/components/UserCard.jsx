import { useNavigate } from 'react-router-dom'

export const UserCard = ({ user, setUser }) => {
    const navigate = useNavigate()

    const impersonate = () => {
        setUser(user)
        navigate('/')
    }
    return (
        <div>
            
            
            <button onClick={impersonate}>login as</button>
        </div>
    )
}