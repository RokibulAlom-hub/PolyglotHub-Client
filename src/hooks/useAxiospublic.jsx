import axios from "axios";

export const axiosPublic = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
})
const useAxiospublic = () =>{
    return axiosPublic
}
export default useAxiospublic