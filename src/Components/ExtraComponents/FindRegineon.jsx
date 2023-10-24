import { useEffect, useState } from "react"



export default function FindRegineon() {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="my-10">
                <h2 className="text-center text-4xl font-semibold mb-3">Find Region Country  </h2>
                <span className="w-36 mx-auto block h-1 bg-red-500"></span>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-10">
                {
                    country.slice(75, 85).map(coun => <div key={coun.id}>
                        <img data-aos="flip-left" className="w-full sm:h-32 h-20" src={coun.flags.png} alt="" />
                        <h2 className="font-semibold">{coun.name.common}</h2>
                    </div>)
                }
            </div>
        </div>
    )
}
