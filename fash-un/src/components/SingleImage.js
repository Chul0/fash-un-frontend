import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

const SingleImage = (props) => {
    const { id } = useParams()
    const [singleImage, setSingleImage] = useState({})

    const [imagePopup, setImagePopup] = useState(false)  

    const fetchSingleImage = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/brandContent/${id}`)
        .then((response) => {
            console.log(response.data.brandContent.image);
            setSingleImage(response.data)
        })
    }

    useEffect(fetchSingleImage, [id])



    const handleShowDialog = () => {
        setImagePopup(!imagePopup)
        console.log('you clicked an image');
    }
    useEffect(handleShowDialog, [singleImage])




    return(
        <div className="dialog-container">
            <>
            {singleImage.brandContent ?
            <>
                {imagePopup && (
                    
                    <dialog
                        className="dialog"
                        style={{ position: "absolute" }}
                        open
                        >
                        <img
                            className="smallImage" 
                            src={singleImage.brandContent.image}
                            onClick={handleShowDialog}
                        />
                        <button
                            className="save-to-board-button"
                        >save to my board</button>
                        </dialog>
                )}
                </>
                    
                    
            :
            <p>
                loading..
            </p>

            }
</>




        </div>
    )
}


export default SingleImage