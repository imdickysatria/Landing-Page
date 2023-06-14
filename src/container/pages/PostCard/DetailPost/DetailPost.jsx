import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailPost () {
    const params = useParams();
    const [article, setArticle] = useState({})

   useEffect( function (){
    async function getArticle(){
        const request = await axios.get(`http://localhost:3004/posts/${params.id}`);
        const response = await request.data;
        setArticle(response);
    }
    getArticle();
   }, [params])

        return(
           
            <>
             <p>{article.id}</p>
            <p>{article.title}</p>
            <p>{article.body}</p>
            </>
        )
    
}
export default DetailPost;