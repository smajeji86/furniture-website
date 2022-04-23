import axios from "axios";

const instance = axios.create({
  baseURL: "https://furne-store.herokuapp.com/api/furne-store"
});

export default instance;
