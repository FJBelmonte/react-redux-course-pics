import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID fd4ba8889aa7a759db40fd08af6fd8f97de5e4fef77373c864719dfc8fc55b97"
  }
});
