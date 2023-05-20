import axios from "axios";

export const fetchUsers = async() => {
    const data = await axios.get(`https://64660a8c9c09d77a62fb4662.mockapi.io/users/`);
    return data;
}