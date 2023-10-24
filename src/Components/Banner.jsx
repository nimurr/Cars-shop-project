import { Link } from 'react-router-dom'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Banner() {
  return (
    <div className="heroBanner z-0 md:px-20 px-5 sm:h-auto lg:h-[90vh] lg:grid lg:grid-cols-2  py-10 md:py-0">
      <div className='flex items-center' data-aos="fade-right">
        <div>
          <h2 className='md:text-8xl text-4xl text-white font-semibold'>Best Car Price in World </h2>
          <Link to='/carsdetails'>
            <button className='px-6 py-2 bg-red-600 text-white font-semibold mt-5 rounded'>Details</button>
          </Link>
        </div>
      </div>
      <div className='flex  items-end' data-aos="fade-left">
        <img src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/assignment-10-img/banner-car.png" alt="" />
      </div>
    </div>
  )
}
