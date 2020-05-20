import React, {Component} from "react";
import firebaseConfig from "../firebase";
import "firebase/database"
import Product from "./Product";
import {NavLink} from "react-router-dom";
import classes from "./Catalog.module.css"

class Catalog extends Component {

    constructor(props) {
        super(props);
        this.removeProduct = this.removeProduct.bind(this);

        this.app = firebaseConfig
        this.database = this.app.database().ref().child('products');

        this.state = {
            products: [],
        }
    }

    componentWillMount() {
        const previousProduct = this.state.products;

        // DataSnapshot
        this.database.on('child_added', snap => {
            previousProduct.push({
                id: snap.key,
                productPhoto: snap.val().productPhoto,
                productContent: snap.val().productContent,
                productDescription: snap.val().productDescription,
                productPrice: snap.val().productPrice,
                productDiscount: snap.val().productDiscount,
                productDiscountEnd: snap.val().productDiscountEnd,
            })

            this.setState({
                products: previousProduct
            })
        })

        this.database.on('child_removed', snap => {
            for (let i = 0; i < previousProduct.length; i++) {
                if (previousProduct[i].id === snap.key) {
                    previousProduct.splice(i, 1);
                }
            }

            this.setState({
                products: previousProduct
            })
        })
    }

    removeProduct(productId) {
        this.database.child(productId).remove();
    }

    render() {
        return (
            <div className={classes.content}>
                <div className="">
                    <button onClick={() => firebaseConfig.auth().signOut()}>SignOut</button>
                    <h1>Catalog</h1>
                </div>
                <div>
                    <NavLink to='/add'><h3>Add New Product</h3></NavLink>
                </div>
                <div className={classes.product}>
                    {
                        this.state.products.map((product) => {
                            return (
                                <Product productPhoto={product.productPhoto}
                                         productContent={product.productContent}
                                         productDescription={product.productDescription}
                                         productPrice={product.productPrice}
                                         productDiscount={product.productDiscount}
                                         productDiscountEnd={product.productDiscountEnd}
                                         productId={product.id}
                                         key={product.id}
                                         removeProduct={this.removeProduct}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Catalog;