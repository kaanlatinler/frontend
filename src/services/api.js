import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7007/v1/",
});

const LoginOwner = async (data) => {
  return await api.post("auth/owner-login", data);
};

module.exports = {
  LoginOwner,
};
