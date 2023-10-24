import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}


export default function AllCars() {
    // const {  loading  } = useContext(AuthContext);


    const loadCars = useLoaderData();
    const perams = useParams();
    const id = perams.id;

    const [cars, setCars] = useState([])
    useEffect(() => {
        const find = loadCars.filter(f => f.category.toLowerCase() == id.toLowerCase());
        setCars(find)
        // loading(false
    }, [])


    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1,
            spacing: 10,
        },
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )





    return (
        <div>


            <div className="md:w-8/12 w-11/12 mx-auto">

                <div ref={sliderRef} className="keen-slider lg:h-[65vh]">
                    <div className="keen-slider__slide number-slide1 w-full bg-gray-100 p-4 rounded-xl">
                        <img src='https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/slider_img/Screenshot_4.png' className="w-full" />
                    </div>
                    <div className="keen-slider__slide number-slide2 bg-gray-100 p-4 rounded-xl">
                        <img src='https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/slider_img/Screenshot_2.png' className="w-full" />
                    </div>
                    <div className="keen-slider__slide number-slide3 bg-gray-100 p-4 rounded-xl">
                        <img src='https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/slider_img/Screenshot_3.png' className="w-full" />
                    </div>
                    <div className="keen-slider__slide number-slide4 bg-gray-100 p-4 rounded-xl">
                        <img src='https://raw.githubusercontent.com/nerobIslam404/assingment-10-img/main/slider_img/Screenshot_5.png' className="w-full" />
                    </div>
                </div>
                
                    <div ref={thumbnailRef} className="sm:w-4/12 w-8/12 mx-auto flex my-2">
                        <div className="keen-slider__slide number-slide1 w-10 rounded-lg bg-black sm:p-2 text-center cursor-pointer font-semibold sm:text-2xl text-white"><span className="hidden sm:inline"></span> 1</div>
                        <div className="keen-slider__slide number-slide2 rounded-lg bg-black sm:p-2 text-center cursor-pointer font-semibold sm:text-2xl text-white"> <span className="hidden sm:inline"></span> 2</div>
                        <div className="keen-slider__slide number-slide3 rounded-lg bg-black sm:p-2 text-center cursor-pointer font-semibold sm:text-2xl text-white"> <span className="hidden sm:inline"></span> 3</div>
                        <div className="keen-slider__slide number-slide4 rounded-lg bg-black sm:p-2 text-center cursor-pointer font-semibold sm:text-2xl text-white"><span className="hidden sm:inline"></span> 4</div>
                    </div>
                    <div className=""></div>
            </div>




            <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:w-10/12 w-11/12 mx-auto gap-4 my-10">
                {
                    cars.map(car => <div className="bg-gray-200 p-4" key={car._id}>
                        <img className="w-full mb-2 h-[30vh]" src={car.imgUrl} alt="" />
                        <h2 className="font-semibold text-2xl">Name : {car.name}</h2>
                        <h2 className="font-semibold">Brand Name : {car.brandName}</h2>
                        <p className="my-2">{car.description}</p>
                        <div className="flex gap-4">
                            <Link to={`/details/${car._id}`} className="p-2 text-center bg-red-500 rounded text-white font-semibold w-6/12">
                                Details
                            </Link>
                            <Link to={`/update/${car._id}`} className="p-2 bg-blue-500 rounded text-white font-semibold w-6/12 text-center">
                                Update
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
