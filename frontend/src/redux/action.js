
import axios from "axios";
import { GET_BLOGS } from "./actionType";

export const getBlogs = () => async(dispatch) => {
    let { data } = await axios.get('http://localhost:8080/api/blog');

    dispatch({
        type: GET_BLOGS,
        payload: data,
    });
}