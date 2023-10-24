import { Link } from "react-router-dom";


export default function CarBrandLogo() {



  return (
    <div className="md:my-44 my-10">

      <div className="mb-10">
        <h1 className="text-center mb-2 font-semibold text-4xl ">OUR <span className="text-red-500">BRANDS</span></h1>
        <span className="w-36 mx-auto block h-1 bg-red-500"></span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 sm:grid-cols-2 justify-center w-11/12 mx-auto gap-5">
        <Link to='/cars/allProduct/bmw' data-aos="flip-left" className="bg-gray-200 p-10 rounded">
          <img  className="h-20 mx-auto" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/brandsLogo/bmw.png" alt="" />
          <h2 className="text-center my-2 font-semibold text-xl">BMW</h2>
        </Link>
        <Link to='/cars/allProduct/honda' data-aos="flip-left" className="bg-gray-200 p-10 rounded">
          <img  className="h-20 mx-auto" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/brandsLogo/honda.png" alt="" />
          <h2 className="text-center my-2 font-semibold text-xl">Honda</h2>
        </Link>
        <Link to='/cars/allProduct/lamborghini' data-aos="flip-left" className="bg-gray-200 p-10 rounded">
          <img  className="h-20 mx-auto" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/brandsLogo/lamborgoni.png" alt="" />
          <h2 className="text-center my-2 font-semibold text-xl">Lamborghini</h2>
        </Link>
        <Link to='/cars/allProduct/marsidez' data-aos="flip-left" className="bg-gray-200 p-10 rounded">
          <img  className="h-20 mx-auto" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/brandsLogo/marcitiz.jpeg" alt="" />
          <h2 className="text-center my-2 font-semibold text-xl">Marsidez</h2>
        </Link>
        <Link to='/cars/allProduct/telsa' data-aos="flip-left" className="bg-gray-200 p-10 rounded">
          <img  className="h-20 mx-auto" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/brandsLogo/tesla-logo-free-download-free-vector.jpg" alt="" />
          <h2 className="text-center my-2 font-semibold text-xl">Tesla</h2>
        </Link>
        <Link to='/cars/allProduct/toyota' data-aos="flip-left" className="bg-gray-200 p-10 rounded">
          <img  className="h-20 mx-auto" src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/brandsLogo/toyota.png" alt="" />
          <h2 className="text-center my-2 font-semibold text-xl">Toyota</h2>
        </Link>
      </div>
    </div>
  )
}
