import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const register = (data, navigate, setLoading) => async (dispatch) => {
    try {
        const result = await axios.post(
            process.env.REACT_APP_API_BACKEND + "auth/register",
            data
        );
        const user = result.data.data;
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
        Swal.fire({
            text: result.data.message,
            icon: "success",
        });
        navigate("/login");
    } catch (error) {
        console.log('error: ', error.response.data.error);
        Swal.fire({
            title: error.response.data.error,
            text: error.response.data.message,
            icon: "warning",
        });
        setLoading(false);
    }
};

export const login = (data, navigate, setLoading) => async (dispatch) => {
    try {
        const result = await axios.post(
            process.env.REACT_APP_API_BACKEND + "auth/login",
            data
        );

        const user = result.data;
        console.log('user: ', user);
        const { id } = jwtDecode(user.token)
        console.log('id-user: ', id);
        Cookies.set("user_id", id)
        Cookies.set("token", result.data.token);
        Swal.fire({
            text: result.data.message,
            icon: "success",
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/chat");
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: error.response.data.error,
            text: error.response.data.message,
            icon: "error",
        });
        setLoading(false);
    }
};