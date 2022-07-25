import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import apiCall from "../utils/apiCall";

export default function ArticleList(){
  // store all articles
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    // retrieve all articles from api
   setIsLoading(true);

   apiCall("articles").then(({status, data}) => {
    if(status === 200) {
      setArticles([...data.articles])
      setIsLoading(false)
    }
    // show error if empty <- error handling ticket
   });
  }, [])

  return (
    isLoading ? 
    <>
      <p>Loading articles...</p>
    </>
    :
    <>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />
      })}
    </>
  )
}