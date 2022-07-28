import axios from "axios";

export default function apiCall(path) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.delete(`${api}/${path}`).then((res) => {
    return res;
  });
}
