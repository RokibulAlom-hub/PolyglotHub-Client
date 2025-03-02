import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Headers from "../../Components/Heading/Headers";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import { useState } from "react";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Addtutorials = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showModal,setShowmodal]= useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    
    // host the image file on image bb and then put that into intialdata
    const imageFile = formData.get("image");
    const imageUploadFile = new FormData();
    imageUploadFile.append("image",imageFile)
    const res = await axios.post(image_Api,imageUploadFile,{
      headers: { "content-type": "multipart/form-data" }
    })
    // set the url as a image in initial data again replacing image file
    initialData.review = 0;
    initialData.image = res.data.data.display_url    
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-tutorials`,
        initialData
      );
      setShowmodal(true)
      // <SweetSuccess titletxt="Tutorial" subtxt=" Added Successfully" icon="success"></SweetSuccess>
      navigate("/mytutorials");
    } catch (error) {
      // console.error("Error creating data:", error);
      // <SweetSuccess titletxt="Error" subtxt="Something" icon="error"></SweetSuccess>
    }
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center ">
       {showModal && <SweetSuccess titletxt="Tutorial" subtxt=" Added Successfully" icon="success"></SweetSuccess> }
      <div className="w-full max-w-lg border dark:border-gray-600 my-6  p-8 rounded-lg shadow-md">
        <Headers headtext="Add Tutorial"></Headers>
        <form onSubmit={handleSubmit} className="space-y-4 dark:text-black">
          <div>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="w-full px-3 py-2  rounded-lg shadow-sm"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="w-full px-3 py-2  rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="dark:text-white">Upload Photo</label>
            <input
              type="file"
              name="image"
              className="w-full  py-2  rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="w-full px-3 py-2  rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              placeholder=" Price"
              className="w-full px-3 py-2  rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              className="w-full px-3 py-2  rounded-lg shadow-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full  py-2  bg-secondary rounded-lg shadow-sm hover:bg-accent hover:text-white duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addtutorials;
