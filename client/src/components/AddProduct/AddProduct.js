import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");

    function handleClick() {
        // axios.post("https://les-meilleurs.herokuapp.com/api/products/add", {
        axios.post("http://localhost:5000/api/products/add", {
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
            setTitle("");
        }).catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="text-center display-4 my-4">Add Products</h1>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={({ target }) => setTitle(target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description" placeholder="Description" onChange={({ target }) => setDescription(target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input type="input" className="form-control" placeholder="Quantity" onChange={({ target }) => setCategory(target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="input" className="form-control" placeholder="Price" onChange={({ target }) => setPrice(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> Qantity</label>
                        <input type="input" className="form-control" placeholder="Quantity" onChange={({ target }) => setQuantity(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> URL of Image 1 </label>
                        <input type="input" className="form-control" placeholder="Link of image 1" onChange={({ target }) => setImage1(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> URL of Image 2 </label>
                        <input type="input" className="form-control" placeholder="Link of image 2" onChange={({ target }) => setImage2(target.value)} />
                    </div>
                    <div className="form-group">
                        <label> URL of Image 3 </label>
                        <input type="input" className="form-control" placeholder="Link of image 3" onChange={({ target }) => setImage3(target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleClick}>Add Product</button>

                    <hr />
                </div>
            </div>
        </div>
    );
}
