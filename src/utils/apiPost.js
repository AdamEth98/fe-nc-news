import axios from "axios";

export default function apiPost(path, body, query) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.post(`${api}/${path}`, body).then((res) => {
    return res;
  });
}
