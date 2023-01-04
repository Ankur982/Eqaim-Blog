import { GET_BLOGS } from "./actionType"

const initState = {
    blogs: [],
}

export const Reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: payload
            }

           
        default: return state
    }
}