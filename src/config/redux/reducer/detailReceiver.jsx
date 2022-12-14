const initialState = {
    isLoading: false,
    isError: false,
    data: {},
    error: null,
};

const detailReceiverReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL_RECEIVER_PENDING":
            return { ...state, isLoading: true };
        case "GET_DETAIL_RECEIVER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data,
            };
        case "GET_DETAIL_RECEIVER_FAILED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default detailReceiverReducer;
