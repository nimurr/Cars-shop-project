import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom"


export default function CarDetails() {
    const loadCar = useLoaderData();
    const { id } = useParams();
    // console.log(id,loadCar)

    const [cars, setCars] = useState({});

    useEffect(() => {
        const findcar = loadCar.find(f => f._id == id)
        setCars(findcar)
    }, [])
    

    const totalData = {brandName: cars.brandName , category : cars.category , description:cars.description , imgUrl: cars.imgUrl , name:cars.name , price:cars.price };


    const handleAddToCart = () => {
        

        fetch('https://assigment-server-site.vercel.app/mycart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(totalData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    swal("Good job!", "You clicked the button!", "success")
                }

            })

    }
    

    return (
        <div className="sm:w-6/12 w-11/12 mx-auto my-5 border-2 p-4 rounded">
            <img className="w-full mb-2 sm:h-[50vh] h-[30vh]" src={cars.imgUrl} alt="" />
            <h2 className="font-semibold text-2xl">Name : {cars.name}</h2>
            <h2 className="font-semibold">Brand Name : {cars.brandName}</h2>
            <h3 className="font-semibold">Price : {cars.price} $</h3>
            <p>{cars.description} {cars.description}</p>
            <ul className="flex gap-2 items-center my-2">
                <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                {/* <li>{car.rating}</li> */}
            </ul>

            <button onClick={handleAddToCart} className="p-2 bg-red-500 rounded text-white font-semibold sm:w-6/12">Add To Cart</button>

        </div>
    )
}
