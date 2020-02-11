import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import categories from "../../customSettings/productCategory";


export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [numCategory, setNumCategory] = useState(0);

    useEffect(() => {
        console.log(categories);

    }, [])

    function handleClick() {
        // axios.post("https:// les-meilleurs.herokuapp.com/api/products/add", {
        axios.post("/api/products/add", {
            title,
            description,
            category,
            quantity,
            price,
            image1,
            image2,
            image3
        }).then(res => {
            console.log(res);
            // reset form fields
            setTitle(""); setDescription(""); setCategory(""); setQuantity(""); setPrice(""); setImage1(""); setImage2(""); setImage3("");
        }).catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="text-center display-4 my-4">Add Products</h1>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" placeholder="Title" value={title} onChange={({ target }) => setTitle(target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description" placeholder="Description" value={description} onChange={({ target }) => setDescription(target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control" value={category} onChange={({ target }) => setCategory(target.value)}>
                            {categories.map(category => { return <option key={category} value={category}> {category}</option> })}
                        </select>
                        <p>{category}</p>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="input" className="form-control" placeholder="Price" value={price} onChange={({ target }) => setPrice(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> Qantity</label>
                        <input type="input" className="form-control" placeholder="Quantity" value={quantity} onChange={({ target }) => setQuantity(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> URL of Image 1 </label>
                        <input type="input" className="form-control" placeholder="Link of image 1" value={image1} onChange={({ target }) => setImage1(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> URL of Image 2 </label>
                        <input type="input" className="form-control" placeholder="Link of image 2" value={image2} onChange={({ target }) => setImage2(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> URL of Image 3 </label>
                        <input type="input" className="form-control" placeholder="Link of image 3" value={image3} onChange={({ target }) => setImage3(target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleClick}>Add Product</button>

                    <hr />
                </div>
            </div>
        </div>
    );
}
