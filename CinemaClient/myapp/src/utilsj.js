import axios from "axios";


const updateItem = (url, id, obj) => axios.put(`${url}/${id}`, obj);

const deleteItem = (url, id) => axios.delete(`${url}/${id}`);