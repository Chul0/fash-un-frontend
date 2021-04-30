import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const SingleBrand = (props) => {
    const { id } = useParams()
    const [brandContent, setBrandContent] = useState({})
    
    const fetchBrandContent = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/brands/${id}`)
        .then((response) => {
            console.log(response);
            setBrandContent(response.data)
        })
    }

    useState(fetchBrandContent, [])

    return(
        <div className="brandContent-container">
            {
                brandContent.brandContent ?
                brandContent.brandContent.map((content) => {
                    return <div key={content.id}
                    className="allContents">
                        <h1>{brandContent.brand.name}</h1>
                        <img className="contentImage" src={content.image} />
                        </div>
                })
                :
                <p>Loading...</p>
            }

        </div>
    )
}


export default SingleBrand