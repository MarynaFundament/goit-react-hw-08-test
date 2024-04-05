import { useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selector"


export default function UserMenu (){
const user = useSelector(selectUser)

    return (
        <div>
            <p>Welcome, {user.name} </p>
            <button> Logout </button>
        </div>
    )
}