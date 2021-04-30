import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [user, setUser] = useContext(UserContext)

    return(
        <nav>
            <Link to="/">Home</Link>{' | '}

        {user.id ?
        <>
            <Link to="/brand">See All Brands</Link>{' | '}
            <Link to="/myboard">My Board</Link>{' | '}
            <Link to="/profile">Profile</Link>{' | '}
            <span 
                id="login-button"
                onClick={() => {
                    localStorage.removeItem('userId')
                    window.location.reload()
                }}
            >Sign Out</span>
        </>

        :

        <>    
            <Link to="/signup">Sign Up</Link>{' | '}
            <Link to="/login">Login</Link>
        </>    
        }

        </nav>
    )
}


export default NavBar