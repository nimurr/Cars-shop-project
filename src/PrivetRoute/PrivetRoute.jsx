import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import '../App.css'

 
export default function PrivetRoute({children}) {
    const { user , loading  } = useContext(AuthContext);
    const location = useLocation();


    if(user){
        return children;
    }
    if(loading){
        return <img className="spaner_loading w-20 mx-auto block my-32" src="https://i.ibb.co/FxrdSdr/loader-Tires-removebg-preview.png" alt="" />
        // return <span className="loading loading-spinner text-red-500 w-20 mx-auto block py-72"></span>
        // return <span className="loading loading-spinner loading-lg mx-auto block my-40"></span>
    }

  return <Navigate state={location.pathname} to='/login'></Navigate>
}
