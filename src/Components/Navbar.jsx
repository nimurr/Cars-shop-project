import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { useContext } from "react"
import toast, { Toaster } from "react-hot-toast"


export default function Navbar() {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        toast.success('LogOut SuccessFully !')
        userLogOut()

    }

    const li = <>
        <NavLink className='mx-2 hover:text-red-500 duration-150 p-1 text-sm font-semibold' to='/'>Home</NavLink>
        <NavLink className='mx-2 hover:text-red-500 duration-150 p-1 text-sm font-semibold' to='/addproduct'>Add Peoduct</NavLink>
        <NavLink className='mx-2 hover:text-red-500 duration-150 p-1 text-sm font-semibold' to='/mycart'>My Cart</NavLink>
    </>
    return (
        <div className="sticky top-0 z-10">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="navbar bg-base-100 sm:px-10 xl:px-20 border-b-2 border-red-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mx-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {li}
                        </ul>
                    </div>
                    <Link to='/' >
                        <img className="sm:w-36 w-16" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/Screenshot_1-removebg-preview%20(1).png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <>
                            <h2 className="mr-2 font-semibold hidden sm:block text-[12px]">{user.displayName}</h2>
                            <img className="w-10 cursor-pointer mr-2 rounded-full" src={user ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'} />
                        </>
                    }
                    {
                        !user ?
                            <Link to='/login'><button className="btn bg-red-500 hover:bg-red-600 text-white">Login</button></Link>
                            :
                            <Link onClick={handleLogOut} to='/'><button className="sm:btn p-2 rounded hover:bg-red-600 sm:bg-red-500 bg-red-500 sm:text-white text-white">LogOut <i className='bx bx-right-arrow-alt'></i></button></Link>
                    }
                </div>
            </div>
        </div>
    )
}
