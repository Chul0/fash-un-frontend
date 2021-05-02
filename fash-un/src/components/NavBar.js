import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link, Router } from 'react-router-dom'

const NavBar = () => {
    const [user, setUser] = useContext(UserContext)

    return(
        <nav>
            <Link to="/">Home</Link>{' | '}

        {user.id ?
        <>
            <Link to="/brands">See All Brands</Link>{' | '}
            <Link to="/myboard">My Board</Link>{' | '}
            <Link to="/profile">Profile</Link>{' | '}
            <Link to="/" 
                onClick={() => {
                    localStorage.removeItem('userId')
                    setUser('')
                }}
            >Sign Out</Link>
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