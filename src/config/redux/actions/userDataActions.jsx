import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";

export const getAllUser = async (dispatch) => {
    try {
        const users = await axios.get(
            process.env.API_BACKEND + "/users"
        )
        const result = users.data.data
        dispatch({ type: "GET_ALL_USER", payload: result })
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export const getDetailUser = (id) => async (dispatch) => {
    try {
        const detailUser = await axios.get(process.env.REACT_APP_API_BACKEND + "users/" + id)
        const result = detailUser.data.data
        console.log('result: ', result)
        dispatch({ type: "GET_DETAIL_USER", payload: result })
    } catch (err) {
        console.log(err.response.data.message)
    }
}

export const getDetailReceiver = (id, navigate) => async (dispatch) => {
    const token = Cookies.get('token');
  
    try {
      dispatch({
        type: "GET_DETAIL_RECEIVER_PENDING",
        payload: null,
      });
      const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}users/${id}`);
  
      dispatch({
        type: "GET_DETAIL_RECEIVER_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      if (error.response) {
        if (parseInt(error.response.data.code, 10) === 401) {
        //   Cookies.remove("token")
        //   Cookies.remove("user_id")
          return navigate('/login');
        }
        error.message = error.response.data.error;
      }
      dispatch({
        type: "GET_DETAIL_RECEIVER_FAILED",
        payload: error.message,
      });
    }
  };

export const updateUser = (data, token, setEdit) => async (dispatch) => {
    console.log("all-data: ", data)
    try {
        const allData = {
            "name": data.name,
            "email": data.email,
            "phone": data.phone
        }
        const users = await axios.put(process.env.REACT_APP_API_BACKEND + "users", allData, {
            headers: {
                token: token
            }
        });
        console.log('user: ', users)
        Swal.fire({
            title: "Success!",
            text: 'Success update user',
            icon: "success",
        });
        const result = users.data.data
        setEdit(false)
        dispatch({ type: "UPDATE_USER", payload: result })
    } catch (error) {
        Swal.fire({
            title: error.response.data.error,
            text: error.response.data.message,
            icon: "error",
        });
        setEdit(false);
    }
}

export const updatePhoto = (id, saveImage, token) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("photo", saveImage);
        const upload = await axios.put(process.env.REACT_APP_API_BACKEND + "users/upload/" + id, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                token: token
            },
        })
        console.log('upload', upload)
        // Swal.fire({
        //     title: "Success!",
        //     text: 'Success upload photo user',
        //     icon: "success",
        // });
        const result = upload.data.data
        dispatch({type: "UPLOAD_PHOTO", payload: result})
        window.location.reload();
    } catch (error) {
        Swal.fire({
            title: error.response.data.error,
            text: error.response.data.message,
            icon: "error",
        });
    }
}