import axios from "axios";

export function apiGet(path, query) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.get(`${api}/${path}${query ? query : ""}`).then((res) => {
    return res;
  });
}

export function apiDelete(path) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.delete(`${api}/${path}`).then((res) => {
    return res;
  });
}

export function apiPatch(path, body) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.patch(`${api}/${path}`, body).then((res) => {
    return res;
  });
}

export function apiPost(path, body, query) {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";

  return axios.post(`${api}/${path}`, body).then((res) => {
    return res;
  });
}

// module.exports = { apiGet, apiDelete, apiPatch, apiPost };
