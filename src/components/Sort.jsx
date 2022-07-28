import "../css/sort.css";
import { apiGet } from "../utils/api";

export default function Sort({ setArticles }) {
  const handleChange = (e) => {
    const parsedQuery = e.target.value.split("-");

    // manually sort by comment_count since backend cant sort by aggregate result
    // means we can't get updated list of articles if a new one is posted
    // keep or remove?
    if (parsedQuery[0] === "comment_count") {
      setArticles((currentArticles) => {
        const sortedArticles = [...currentArticles];
        sortedArticles.sort((a, b) => {
          if (parsedQuery[1] === "asc") return a.comment_count - b.comment_count;
          return b.comment_count - a.comment_count;
        });
        return sortedArticles;
      });
      // otherwise, just make a new api request with a suitable query
    } else {
      const query = `?sort_by=${parsedQuery[0]}&order=${parsedQuery[1]}`;
      apiGet("articles", query).then(({ data }) => {
        setArticles([...data.articles]);
      });
    }
  };

  return (
    <div className="select-cont">
      <select onChange={(e) => handleChange(e)}>
        <option value="created_at-desc">{"Date (Descending)"}</option>
        <option value="created_at-asc">{"Date (Ascending)"}</option>
        <option value="votes-desc">{"Votes (Descending)"}</option>
        <option value="votes-asc">{"Votes (Ascending)"}</option>
        <option value="comment_count-desc">{"Comment Count (Descending)"}</option>
        <option value="comment_count-asc">{"Comment Count (Ascending)"}</option>
      </select>
    </div>
  );
}
