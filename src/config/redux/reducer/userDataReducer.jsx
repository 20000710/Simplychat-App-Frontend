const initialState = {
    userList: [],
    userDetail: [],
};

export const usersDataReducers = (state = initialState, action) => {
    if (action.type === "GET_ALL_USER") {
        return {
            ...state,
            userList: action.payload
        };
    } else if (action.type === "GET_DETAIL_USER") {
        return {
            ...state,
            usersDetail: action.payload
        };
    } else if (action.type === "UPDATE_USER") {
        return state;
    } else if (action.type === "UPLOAD_PHOTO") {
        return state; 
    }
    else {
        return state;
    }
}