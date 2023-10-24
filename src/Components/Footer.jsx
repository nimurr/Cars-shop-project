import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="footer sm:p-10 p-4 bg-black text-gray-400 font-semibold ">
                <aside className="text-white">
                    <img className="w-5/12" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/Screenshot_1-removebg-preview%20(1).png" alt="" />
                    <p className="font-semibold">AUTO CAR Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Pages</header>
                    <a className="link link-hover hover:text-red-500"><Link to='/'>Home</Link></a>
                    <a className="link link-hover hover:text-red-500"><Link to='/addproduct'>Add Product</Link></a>
                    <a className="link link-hover hover:text-red-500"><Link to='/mycart'>My Cart</Link></a>
                    {/* <a className="link link-hover hover:text-red-500"><Link to='/register'>Register</Link></a>  */}
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover hover:text-red-500">Telsa</a>
                    <a className="link link-hover hover:text-red-500">BMW</a>
                    <a className="link link-hover hover:text-red-500">Lamborghini</a>
                    <a className="link link-hover hover:text-red-500">Marsidez </a>
                    <a className="link link-hover hover:text-red-500">Toyota </a>
                    <a className="link link-hover hover:text-red-500">Honda </a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <ul className="flex gap-4 my-2">
                        <li><img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=256&id=118497&format=png" alt="" /></li>
                        <li><img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=256&id=V5cGWnc9R4xj&format=png" alt="" /></li>
                        <li><img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="" /></li>
                        <li><img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=256&id=xuvGCOXi8Wyg&format=png" alt="" /></li>
                        <li><img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=256&id=19318&format=png" alt="" /></li>
                    </ul>
                    <label>
                        <input type="email" className="p-2 rounded-l" placeholder="Contact with Email .. " />
                        <button className="p-2 rounded-r text-white font-semibold bg-red-600 ">Submit</button>
                    </label>
                </nav>
            </footer>
        </div>
    )
}
