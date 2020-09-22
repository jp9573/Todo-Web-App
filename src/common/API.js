export const apiURL = process.env.NODE_ENV === 'production' ?
    window.location.protocol + "//" + window.location.host + "/" :
    "http://localhost:8000/";
const axios = require("axios");
const axiosInstance = axios.create({
    baseURL: apiURL
});

export function fetchTodos() {
    return axiosInstance.get("/todo/");
}

export function deleteTodo(todo) {
    return axiosInstance.delete("/todo/", todo);
}

export function addTodo(todo) {
    return axiosInstance.post("/todo/", todo);
}
