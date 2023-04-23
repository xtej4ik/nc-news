import { useNavigate } from 'react-router-dom'

export const UserCard = ({ user, setUser }) => {
    const navigate = useNavigate()

    const impersonate = () => {
        setUser(user)
        navigate('/')
    }
    return (
        
        <div>
            <br>
            </br>
            <br>
            </br>


            <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={user.avatar_url} alt="avatar" ></img>
        
            </div>
            <div class="flip-card-back">
            <p>{user.name}</p> 
            
             </div>
            </div>
            </div>
            <br>
            </br>
            <br>
            </br>
            <button classnName="userbutton" onClick={impersonate}>login as</button>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
           
            
        </div>
    )
}
