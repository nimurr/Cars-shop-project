 

export default function About() {
  return (
    <div className="my-10 w-10/12 mx-auto">
        <h2 className="text-center text-4xl mb-2 font-semibold" data-aos="fade-in">About</h2>
        <span className="w-36 mx-auto block h-1 bg-red-500"></span>
        <div className="lg:grid grid-cols-2 my-20 flex flex-col-reverse gap-6">
            <div data-aos="zoom-in">
                <h2 className="text-2xl font-semibold mb-2">Car Sell About</h2>
                <p className="text-justify">Edmunds is a trusted resource for car information, offering a wealth of data on new and used cars . You can use their website to find pricing information, expert reviews, and a True Market Value tool for determining a fair price for a vehicle. When using these websites, remember to exercise caution and do your due diligence when buying or selling a car. It is important to verify the vehicles condition, history, and the credibility of the seller or buyer. Additionally, consider using secure payment methods and meeting in safe, public locations for test drives and transactions.</p>
            </div>
            <div data-aos="zoom-in">
                <img src="https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/carAbout.png" alt="" />
            </div>
        </div>
    </div>
  )
}
