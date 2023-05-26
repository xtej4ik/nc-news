import { useEffect, useState } from "react";
import { getAllUsers } from "../api";
import { UserCard } from "./UserCard";

const UserList = ({ setUser }) => {
    const [isLoading, setLoading] = useState(false)
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        getAllUsers()
            .then(users => {
                setAllUsers(users)
            })
            .finally(() => {
                setLoading(true)
            })
    })

    return (
        <div>
            {allUsers.map(user => {
                return <UserCard user={user} setUser={setUser}></UserCard>
            })}
        </div>
    )

}

export default UserList;