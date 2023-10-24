import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-7xl font-bold text-red-500">404 ! <br /> Not Found</h1>
                        <p className="py-6">This Page is font found Please Try anther page . </p>
                        <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
