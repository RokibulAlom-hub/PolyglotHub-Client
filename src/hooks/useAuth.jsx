import { useContext } from "react"
import { AuthContext } from "../Authprovider/Authprovider"

const useAuth =() =>{
    const context = useContext(AuthContext);
    return context
}
export default useAuth;