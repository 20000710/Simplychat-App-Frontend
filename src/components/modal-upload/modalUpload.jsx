import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { updatePhoto } from '../../config/redux/actions/userDataActions';

const ModalUpload = ({ id, photo, token }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        photo,
    })
    const [saveImage, setSaveImage] = useState(photo)

    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        const uploader = e.target.files[0];
        setSaveImage(uploader);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePhoto(id, saveImage, token))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    className="form-control mt-3"
                    name="photo"
                    type="file"
                    id={id}
                    onChange={handleUpload}
                />
            </div>
            <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-primary btn-upload">upload</button>
            </div>
        </form>
    )
}

export default ModalUpload