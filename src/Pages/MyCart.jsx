import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



export default function MyCart() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://assigment-server-site.vercel.app/mycart')
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])
  console.log(cars)

  const handleDelete = (id) => {
    // console.log('delete button clicked', id)
    fetch(`https://assigment-server-site.vercel.app/mycart/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Car delete SuccessFully')
          const remainingUser = cars.filter(user => user._id != id);
          setCars(remainingUser)
        }

      })

  }

  return (
    <div>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:w-10/12 w-11/12 mx-auto gap-4 my-10">
        {
          cars.map(car => <div data-aos="zoom-in" className="border-2 p-2" key={car._id}>
            <img className="w-full mb-2 h-[30vh]" src={car.imgUrl} alt="" />
            <h2 className="font-semibold text-2xl">Name : {car.name}</h2>
            <h2 className="font-semibold">Brand Name : {car.brandName}</h2>
            <h3 className="font-semibold">Price : {car.price} $</h3>
            <p>{car.description}</p>
            <ul className="flex gap-2 items-center my-2">
              <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
              <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
              <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
              <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
              <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
              {/* <li>{car.rating}</li> */}
            </ul>
            <div className="flex gap-4">
              <Link className="p-2 bg-blue-500 rounded text-center text-white font-semibold w-6/12" to={`/update2/${car._id}`}>
                Update
              </Link>
              <button onClick={() => handleDelete(car._id)} className="p-2 bg-red-500 rounded text-white font-semibold w-6/12">Delete</button>
            </div>
          </div>)
        }
      </div>



        


    </div>
  )
}
