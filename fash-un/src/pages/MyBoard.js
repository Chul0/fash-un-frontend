import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'


const MyBoard = () => {
    const [user, setUser] =useContext(UserContext)
    const [savedImages, setSavedImages] = useState([])

    const fetchSavedImage= async () =>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/myboard`,{
                headers:{
                    Authorization: user.id
                }
            })
            console.log(response);
            setSavedImages(response.data)
        } catch (error) {
            console.log({error});
        }
       
    }

    useEffect(fetchSavedImage,[user.id])




    return(
        <div className="contentImage-container">
            {
                savedImages.length ?
                savedImages.map((image)=>{
                    return <div key={image.id} >
                        <img src={image.image} 
                            style={{ width: "300px", height: "500px", margin:" 0 10px 0 10px"}}/>
                        </div>
                })
                :
                <p>
                    Looding...
                </p>
            }
        </div>
    )
}


export default MyBoard