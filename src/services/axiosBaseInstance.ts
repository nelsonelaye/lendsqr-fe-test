import axios from "axios";

// Creates a base instance for all axios based request
// So no need the call the full url when using this
// Just call axios.get("/jobs")
// We could set other properties here like headers, etc

const axiosBaseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export { axiosBaseInstance };
