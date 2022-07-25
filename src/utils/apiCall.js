import axios from "axios";

export default function apiCall(path) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.get(`${api}/${path}`).then((res) => {
    return res;
  });
}
