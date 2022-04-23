import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseURL}/${id}`, newObject);
};

const deletePersonServer = (id) => {
  return axios.delete(`${baseURL}/${id}`).then(() => {
    console.log("Delete successful");
  });
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  deletePersonServer: deletePersonServer,
};
