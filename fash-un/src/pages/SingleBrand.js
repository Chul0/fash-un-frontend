import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CommentForm from '../components/CommentForm'


const SingleBrand = (props) => {
    const { id } = useParams()
    const [brandContent, setBrandContent] = useState({})
    const [shouldReload, setShouldReload ] = useState(true)
    
    const fetchBrandContent = () => {
        if (!shouldReload) { return }

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/brands/${id}`)
        .then((response) => {
            // console.log(response.data);
            setBrandContent(response.data)
            setShouldReload(false)
        })
    }

    useEffect(fetchBrandContent, [])
    useEffect(fetchBrandContent, [shouldReload])


        
    return(
        <div className="brandContent-container">
            {/* print brand name only once, don't loop */}
            {
                brandContent.brandContent ?
                <h1 id="brandName">{brandContent.brand.name}</h1>
                :
                null
            }

            <div className="contentImage-container"> 
            {
                brandContent.brandContent ?
                brandContent.brandContent.map((content) => {
                    return <div key={content.id}>
                            <Link to={`/brands/${id}/content/${content.id}`}>
                                <img className="contentImage"
                                src={content.image} 
                                key={content.id}
                                style={{ width: "300px", height: "500px", margin:" 0 10px 0 10px"}} />
                            </Link>
                            
                        

                        </div>
                })
                :
                <p>Loading...</p>
            }
            </div>
            <div className="comment-container">
                <>
                <CommentForm setShouldReload={setShouldReload} />
                </>
                <div className="each-comment">
                    {brandContent.comments &&
                        brandContent.comments.map((comment) => {
                            return <div key={comment.id}>
                                        <p>{comment.user.name}{' | '}{comment.description}</p>
                                   </div>
                        })
                    }
                </div>
               {/*
               {brandContent.comments.user.name}  
               {brandContent.comments.description} */}
            </div>

        </div>
    )
}


export default SingleBrand