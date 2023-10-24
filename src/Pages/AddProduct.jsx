import toast, { Toaster } from "react-hot-toast";

export default function AddProduct() {

    const handleAddProduct = (e) => {
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
        console.log(product)

        // if(category){
        //     return toast.error('Please Select The Category')
        // }

        if(rating > 5){
            return  toast.error('Please Enter Rating value under 6!')

        }

        fetch('https://assigment-server-site.vercel.app/addproducts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
               return toast.success('Add Product Successfully !')

            })

        form.reset()

    }


    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div data-aos="zoom-in" className="sm:w-8/12 w-10/12 mx-auto p-5 my-10 rounded min-h-screen bg-red-200">
                <form onSubmit={handleAddProduct} className="">
                    <div className="grid sm:grid-cols-2 sm:gap-4">
                        <label className="my-4 block">
                            <span className="font-semibold">Image URL *</span>
                            <input required className="w-full p-2 rounded mt-2" type="text" name="imgUrl" placeholder="Image URL..." />
                        </label>
                        <label className="my-4 block">
                            <span className="font-semibold">Name *</span>
                            <input required className="w-full p-2 rounded mt-2" type="text" name="name" placeholder="Product Name..." />
                        </label>
                    </div>
                    <div className="grid sm:grid-cols-2 sm:gap-4">
                        <label className="my-4 block">
                            <span className="font-semibold">Brand Name *</span>
                            <input required className="w-full p-2 rounded mt-2" type="text" name="brandName" placeholder="Brand Name..." />
                        </label>

                        <label className="my-4 ">
                            <span className="font-semibold">Category Name *</span>
                            <select required className="w-full p-2 my-2" name="category" id="">
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
                        <input required className="w-full p-2 rounded mt-2" type="number" name="price" placeholder="Price ..." />
                    </label>
                    <label className="my-4 block">
                        <span className="font-semibold">Short description *</span>
                        <textarea required className="w-full h-20 p-2 rounded mt-2" type="text" name="description" placeholder="Short description ..." />
                    </label>

                    <label className="my-4 block">
                        <span className="font-semibold">Rating *</span>
                        <input required className="w-full p-2 rounded mt-2" type="number" name="rating" placeholder="Rating ..." />
                    </label>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-red-500 border-0 hover:bg-red-500 text-white">ADD Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
