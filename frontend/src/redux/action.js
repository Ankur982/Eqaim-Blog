
import axios from "axios";
import { GET_BLOGS, GET_BLOGS_BY_ID, POST_BLOGS } from "./actionType";

export const getBlogs = () => async(dispatch) => {
    let { data } = await axios.get('http://localhost:8080/api/blog');
    console.log(data)
    dispatch({
        type: GET_BLOGS,
        payload: data,
    });
}



export const postBlogs = (newBlog) => async(dispatch) => {
    console.log(newBlog)
    let { data } = await axios.post('http://localhost:8080/api/blog',newBlog);
    alert("Post Added Successfully....!")
    dispatch({
        type: POST_BLOGS,
        payload: data,
    });
}

export const getBlogById = (id) => async(dispatch) => {
    
    let { data } = await axios.get(`http://localhost:8080/api/blog/${id}`);
    dispatch({
        type: GET_BLOGS_BY_ID,
        payload: data,
    });
}