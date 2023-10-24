
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"



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

export default function Review() {
    // const [sliderRef] = useKeenSlider({
    //     slides: {
    //         perView: 3,
    //         spacing: 15,
    //     },
    // })


    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 2,
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
        <div className="w-10/12 mx-auto md:my-20 my-10 " data-aos="zoom-in">

            <div className="my-10">
                <h2 className="text-4xl text-center font-semibold mb-2">Review</h2>
                <span className="w-36 mx-auto block h-1 bg-red-500"></span>
            </div>

            <div className="grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-10">
                <div>
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Dipu</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
                <div>
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Rakib</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
                <div>
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Nerob</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
            </div>
            {/* <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 w-full bg-gray-100 p-4 rounded-xl">
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Nerob</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
                <div className="keen-slider__slide number-slide2 bg-gray-100 p-4 rounded-xl">
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Dipok</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
                <div className="keen-slider__slide number-slide3 bg-gray-100 p-4 rounded-xl">
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Dipu</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
                <div className="keen-slider__slide number-slide4 bg-gray-100 p-4 rounded-xl">
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Rakib</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
                <div className="keen-slider__slide number-slide5 bg-gray-100 p-4 rounded-xl">
                    <img className="w-10 mx-auto mb-2" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                    <h2 className="text-center text-xl font-semibold">Mujahid</h2>
                    <p className="text-center my-2">The Q5 isn’t a remarkable car, but it is quite good in many ways, making it a worthy, well-rounded thing. And well worth thinking about if you’re in the market for a mid-size SUV.</p>
                    <ul className="flex gap-2 justify-center">
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star'></i></li>
                        <li><i className='text-xl text-orange-400 bx bxs-star-half'></i></li>
                    </ul>
                </div>
            </div> */}

            {/* <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 mx-auto">
                <div className="keen-slider__slide number-slide1 rounded-lg bg-black p-2 text-center font-semibold sm:text-2xl text-white"><span className="hidden sm:inline"></span> 1</div>
                <div className="keen-slider__slide number-slide2 rounded-lg bg-black p-2 text-center font-semibold sm:text-2xl text-white"> <span className="hidden sm:inline"></span> 2</div>
                <div className="keen-slider__slide number-slide3 rounded-lg bg-black p-2 text-center font-semibold sm:text-2xl text-white"> <span className="hidden sm:inline"></span> 3</div>
                <div className="keen-slider__slide number-slide4 rounded-lg bg-black p-2 text-center font-semibold sm:text-2xl text-white"><span className="hidden sm:inline"></span> 4</div>
            </div> */}

        </div>
    )
}
