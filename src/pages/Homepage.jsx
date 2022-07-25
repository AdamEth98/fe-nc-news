import { useEffect, useState } from "react";
import axios from "axios";


// components
import Navbar from "../components/Navbar";

export default function Homepage({api}){
  // store all articles
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    // retrieve all articles from api
    axios.get(`${api}/articles`).then(({data}) => {
      console.log(data);
    })
  }, [])


  return (
    <>
      <Navbar />
    </>
  )
}