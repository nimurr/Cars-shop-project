import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom"


export default function Update() {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data)
    // console.log(data.brandName)

    // const [cars ,setCars] = useState([]);

    const handleUpdateCart = (e) => {
        e.preventDefault()
        const form = e.target;
        // console.log(form)
        const imgUrl = form.imgUrl.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = { imgUrl, name, brandName, category, price, description, rating }


        fetch(`https://assigment-server-site.vercel.app/addproducts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Good job Update Successfully !")
            })

        form.imgUrl.value = '';
        form.name.value = '';
        form.brandName.value = '';
        form.category.value = '';
        form.price.value = '';
        form.description.value = '';
        form.rating.value = '';
    }



    return (
        <div>
            <form onSubmit={handleUpdateCart} className="md:w-8/12 w-10/12 mx-auto sm:p-10 p-4 bg-blue-200 my-10 rounded-md">
                <div className="grid sm:grid-cols-2 gap-4">
                    <label className="my-4 block">
                        <span className="font-semibold">Image URL *</span>
                        <input defaultValue={data.imgUrl} className="w-full p-2 rounded mt-2" type="text" name="imgUrl" placeholder="Image URL..." />
                    </label>
                    <label className="my-4 block">
                        <span className="font-semibold">Name *</span>
                        <input defaultValue={data.name} className="w-full p-2 rounded mt-2" type="text" name="name" placeholder="Product Name..." />
                    </label>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <label className="my-4 block">
                        <span className="font-semibold">Brand Name *</span>
                        <input defaultValue={data.brandName} className="w-full p-2 rounded mt-2" type="text" name="brandName" placeholder="Brand Name..." />
                    </label>

                    <label className="my-4 ">
                        <span className="font-semibold">Category Name *</span>
                        <select defaultValue={data.category} className="w-full p-2 my-2" name="category" id="">
                            <option value="" >Select Category</option>
                            <option value="Telsa">Telsa</option>
                            <option value="BMW">BMW</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Marsidez">Marsidez</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                        </select>
                    </label>
                </div>
                <label className="my-4 block">
                    <span className="font-semibold">Price *</span>
                    <input defaultValue={data.price} className="w-full p-2 rounded mt-2" type="number" name="price" placeholder="Price ..." />
                </label>
                <label className="my-4 block">
                    <span className="font-semibold">Short description *</span>
                    <textarea defaultValue={data.description} className="w-full h-20 p-2 rounded mt-2" type="text" name="description" placeholder="Short description ..." />
                </label>

                <label className="my-4 block">
                    <span className="font-semibold">Rating *</span>
                    <input defaultValue={data.rating} className="w-full p-2 rounded mt-2" type="number" name="rating" placeholder="Rating ..." />
                </label>

                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-red-500 border-0 hover:bg-red-500 text-white">ADD Product</button>
                </div>
            </form>
        </div>
    )
}
