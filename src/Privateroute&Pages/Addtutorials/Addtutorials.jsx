
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import SweetError from "../../Components/Sweetalerts/SweetError";
import Headers from "../../Components/Heading/Headers";

const Addtutorials = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.review = 0;
    // console.log(initialData);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-tutorials`, initialData);
      // console.log(data);
      SweetSuccess();
      navigate('/mytutorials');
    } catch (error) {
      // console.error("Error creating data:", error);
      SweetError();
    }
    e.target.reset();
  };
  console.log(user);
  
  return (
    <div className="flex items-center justify-center ">
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
            <input
              type="url"
              name="image"
              className="w-full px-3 py-2  rounded-lg shadow-sm"
              placeholder="Image URL"
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
