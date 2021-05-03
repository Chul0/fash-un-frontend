import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Redirect } from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useContext(UserContext)
    const [shouldRedirect, setShouldRedirect] =useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
          ...user,
          [name]: value
        })
      }

    const handleSubmit = (e) =>{
        try {
            e.preventDefault()
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/profile`, user,{
                headers: {
                    Authorization: user.id
                }
            })
            setShouldRedirect(true)
        } catch (error) {
            console.log({error});
        }
    }

    const handleDelete = async (e) => {
        try {
            e.preventDefault()
            let response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/`,{
                headers:{
                    Authorization: user.id
                }
            })
            // console.log(response);
            alert(`Bye ${response.data.user.name}`)
            setUser('')
        } catch (error) {
            console.log({error});
        }
    }

    return(
        <>
        { shouldRedirect && <Redirect to={'/'} /> }
        <form onSubmit={handleSubmit}>
     
        <label htmlFor="new-name">Name:</label>
        <input name="name" value={user.name} onChange={handleChange} />

        <label htmlFor="new-email">Email:</label>
        <input name="email" value={user.email} onChange={handleChange} />

        <label htmlFor="new-password">Password:</label>
        <input name="password" type="password" value={user.password} onChange={handleChange} />

        <input id="submit-button" type="submit" value="Edit" />
        <button onClick={handleDelete}>Delete</button>
        </form>
    </>
    )
}


export default Profile