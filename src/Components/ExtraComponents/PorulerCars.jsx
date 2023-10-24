import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PorulerCars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://assigment-server-site.vercel.app/addproducts')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [])
    // console.log(cars)

    return (
        <div className="w-10/12 mx-auto">
            <div className="my-10">
                <h2 className="text-center text-4xl font-semibold mb-3">Popular Cars  </h2>
                <span className="w-36 mx-auto block h-1 bg-red-500"></span>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
                {
                    cars.slice(0,6).map((car, i) => <div data-aos="zoom-in" className="p-4 bg-gray-100" key={i}>
                        <img className="w-full mb-2 h-[30vh]" src={car.imgUrl} alt="" />
                        <h2 className="font-semibold text-2xl">Name : {car.name}</h2>
                        <h2 className="font-semibold">Brand Name : {car.brandName}</h2>
                        <h3 className="font-semibold">Price : {car.price} $</h3>
                        <p>{car.description}</p>
                        <ul className="flex gap-2 items-center">
                            <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                            <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                            <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                            <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                            <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                            {/* <li>{car.rating}</li> */}
                        </ul>
                        <Link className="py-2 px-4 bg-red-500 mt-2 block text-center text-white font-semibold" to={`/details/${car._id}`}>Details</Link>
                    </div>)
                }
            </div>
        </div>
    )
}
