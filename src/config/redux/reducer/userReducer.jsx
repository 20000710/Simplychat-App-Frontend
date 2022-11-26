const initialState = {
    data: {
        "name": "",
        "email": "",
        "password": ""
    },
    isLoading: false
};

export const usersReducers = (state = initialState, action) => {
    if (action.type === "USER_LOGIN_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "USER_REGISTER_SUCCESS") {
        return {
            ...state,
            data: action.payload
        };
    } else if (action.type === "LOGIN_SUCCESS") {
        return {
            ...state,
            data: action.payload
        }
    } else {
        return state;
    }
}