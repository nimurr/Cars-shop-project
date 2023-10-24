import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
    const { userLogin, loginWithGoogle } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast.error("Password need 6 characters .")
        }
        userLogin(email, password)
            .then(result => {
                navigate(location.state ? location.state : '/')
                toast.success('LogIn Successfully !')
                // console.log(result.user)
            })
            .catch(error => {
                // console.log('error', error)
                toast.error('This User is Not Available!')
            })
        form.reset()
    }


    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res)
                navigate(location.state ? location.state : '/')
                toast.success('Login with google Successfully !')
            })
    }




    return (
        <div data-aos="zoom-in" className="lg:w-4/12 sm:w-8/12 w-11/12 mx-auto my-10 bg-red-100 p-4 rounded">
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
            <form onSubmit={handleLogin} className="">
                <label className="my-4 block">
                    <span className="font-semibold">Email *</span>
                    <input required className="w-full p-2 rounded mt-2" type="email" name="email" placeholder="Your Email " />
                </label>
                <label className="my-4 block">
                    <span className="font-semibold">Password *</span>
                    <input required className="w-full p-2 rounded mt-2" type="password" name="password" placeholder="Your Password " />
                </label>
                <span className="block my-2">You are New User ? go <Link className="text-blue-500 font-semibold " to='/register'>Register</Link></span>
                <button type="submit" className="btn w-full bg-red-500 border-0 hover:bg-red-500 text-white">Login</button>
            </form>

            <button onClick={handleGoogleLogin} className="flex font-semibold items-center p-2 gap-2 w-full justify-center mt-2  rounded bg-white">Login With Google <img className="w-6" src="https://img.icons8.com/?size=256&id=V5cGWnc9R4xj&format=png" alt="" /></button>

        </div>
    )
}
