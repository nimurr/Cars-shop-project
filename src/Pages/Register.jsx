import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {

    const { userRegister,upDate,  user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const rsPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d).{6,}$/;
        if (password.length < 6) {
            return toast.error("Password need 6 characters .")
        }
        else if (!rsPass.test(password)) {
            return toast.error("Password Need Uppercase, lowerCase , number and Spacial characters  ");
        }

        userRegister(email, password)
            .then(result => {
                upDate(name,imgUrl )
                navigate(location.state ? location.state : '/')
                toast.success('Register Successfully !')
                console.log(result.user)
            })
            .catch(error => {
                toast.error('User Already Have Register !')
                console.log(error)

            })
            form.reset()

        // console.log(name)
    }


    return (
        <div className="w-11/12 sm:w-6/12 mx-auto my-10" data-aos="zoom-in">
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
            <form onSubmit={handleRegister} className="bg-red-100 p-4 rounded">
                <label className="my-4 block">
                    <span className="font-semibold">Name  *</span>
                    <input required className="w-full p-2 rounded mt-2" type="text" name="name" placeholder="Your Name" />
                </label>
                <label className="my-4 block">
                    <span className="font-semibold">Photo URL *</span>
                    <input required className="w-full p-2 rounded mt-2" type="text" name="imgUrl" placeholder="Your Photo URL" />
                </label>
                <label className="my-4 block">
                    <span className="font-semibold">Email *</span>
                    <input required className="w-full p-2 rounded mt-2" type="email" name="email" placeholder="Your Email " />
                </label>
                <label className="my-4 block">
                    <span className="font-semibold">Password *</span>
                    <input required className="w-full p-2 rounded mt-2" type="password" name="password" placeholder="Your Password " />
                </label>

                <span className="block my-2">You are already register ? go <Link className="text-blue-500 font-semibold " to='/login'>Login</Link></span>
                <button type="submit" className="btn w-full bg-red-500 border-0 hover:bg-red-500 text-white">Register</button>
            </form>
        </div>
    )
}
