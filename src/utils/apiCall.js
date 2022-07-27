import axios from "axios";

export default function apiCall(path, query) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.get(`${api}/${path}${query ? query : ""}`).then((res) => {
    return res;
  });
}
