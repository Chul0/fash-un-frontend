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
            // console.log(response);
            setSavedImages(response.data)
        } catch (error) {
            console.log({error});
        }
       
    }

    useEffect(fetchSavedImage,[user.id])

    const deleteImage = async (imageId) => {
        try {
            let response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/brandcontent/${imageId}`, {
                headers: {
                    Authorization:user.id
                }
            })
            window.location.reload()
        } catch (error) {
            console.log({error});
        }
    }


    return(
        <div>
            <h1>My Board</h1>
        
        <div className="contentImage-container">
            {
                savedImages.length ?
                savedImages.map((image)=>{
                    // console.log(image.id);
                    return <div key={image.id} >
                        <img src={image.image} 
                            style={{ width: "300px", height: "500px", margin:" 0 10px 0 10px"}}/><br></br>
                        <button onClick={()=> deleteImage(image.id)} >delete</button>    
                        </div>
                })
                :
                <p>
                    Looding...
                </p>
            }
        </div>
        </div>
    )
}


export default MyBoard