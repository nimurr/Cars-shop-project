

export default function CarCare() {
  return (
    <div className="my-32 sm:px-20 px-6">
       <h3 className="text-4xl font-semibold text-center my-3">Car Care Tips</h3>
       <span className="w-36 mx-auto block h-1 bg-red-500"></span>
       <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-10">
            <div data-aos="zoom-in" className="bg-gray-100 hover:bg-red-500 rounded hover:text-white duration-500 p-5 text-center ">
                <img className="w-full" src="https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19603.jpg?w=740&t=st=1697582361~exp=1697582961~hmac=8c8977022fe2368fa2e204968c53aae96489b9df625d1fc5ce7c24834a72cdb4" alt="" />
                <h2 className="text-xl font-semibold my-4">Regular Maintenance</h2>
                <p className="text-justify"> Explain the importance of regular maintenance, such as oil changes, filter replacements, and tire rotations. Provide a schedule for these tasks.</p>
            </div>
            <div data-aos="zoom-in" className="bg-gray-100 hover:bg-red-500 rounded hover:text-white duration-500 p-5 text-center ">
                <img className="w-full" src="https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg?w=740&t=st=1697582446~exp=1697583046~hmac=bdbbd64ba7dfa97c9a07a89984cabfe27a178b018fe6532b36d06eb403ca3572" alt="" />
                <h2 className="text-xl font-semibold my-4">Washing and Waxing</h2>
                <p className="text-justify"> Describe the benefits of keeping a car clean, and provide tips on how to wash and wax a vehicle properly.</p>
            </div>
            <div data-aos="zoom-in" className="bg-gray-100 hover:bg-red-500 rounded hover:text-white duration-500 p-5 text-center ">
                <img className="w-full" src="https://img.freepik.com/free-photo/close-up-hand-pumping-gas-car_23-2149212426.jpg?w=740&t=st=1697582539~exp=1697583139~hmac=1895c00b01a0d984c660fa1db16309bf47478f81b6bde5a3970eaafef91f597c" alt="" />
                <h2 className="text-xl font-semibold my-4">Fuel Efficiency</h2>
                <p className="text-justify"> Provide advice on how to improve fuel efficiency, including maintaining a consistent speed, reducing idling, and proper tire inflation.</p>
            </div>
            <div data-aos="zoom-in" className="bg-gray-100 hover:bg-red-500 rounded hover:text-white duration-500 p-5 text-center ">
              <img className="w-full" src="https://img.freepik.com/free-photo/happy-car-driver-with-fastened-seat-belt_158595-4228.jpg?w=740&t=st=1697582592~exp=1697583192~hmac=759ee52c0cc29df0dcbf49473366843c94c120553f195e73567227a947776b09" alt="" />
                <h2 className="text-xl font-semibold my-4">Driving Tips</h2>
                <p className="text-justify"> Offer tips for safe and efficient driving, such as defensive driving techniques and avoiding aggressive behaviors.</p>
            </div>
       </div>
    </div>
  )
}
