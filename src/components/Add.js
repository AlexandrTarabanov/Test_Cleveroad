import React, {Component} from "react";
import firebaseConfig from "../firebase";
import "firebase/database"
import AddProduct from "./AddProduct/AddProduct";
import {NavLink} from "react-router-dom";

class Add extends Component {
    constructor(props) {
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.app = firebaseConfig
        this.database = this.app.database().ref().child('products');

    }

    addProduct(photo, product, description, price, discount, discountEnd) {
        this.database.push().set({
            productPhoto: photo,
            productContent: product,
            productDescription: description,
            productPrice: price,
            productDiscount: discount,
            productDiscountEnd: discountEnd,
        });
    }

    render() {
        return (
            <div>
                <AddProduct addProduct={this.addProduct}/>
                <NavLink to='/'>Back to Catalog</NavLink>
            </div>
        )
    }
}

export default Add;