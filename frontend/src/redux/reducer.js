import { GET_BLOGS, GET_BLOGS_BY_ID, POST_BLOGS } from "./actionType"

const initState = {
    blogs: [],
    addedBlog: {

    },
    currentBlog: {

    }
}

export const Reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: payload
            }

        case POST_BLOGS:
            return {
                ...state,
                addedBlog: payload
            }

        case GET_BLOGS_BY_ID:
            return {
                ...state,
                currentBlog: payload
            }

        default: return state
    }
}