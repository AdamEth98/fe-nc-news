import axios from "axios";

export default function apiPatch(path, body) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.patch(`${api}/${path}`, body).then((res) => {
    return res;
  });
}
