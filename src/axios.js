import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-mern12345.herokuapp.com/",
});

export default instance;
