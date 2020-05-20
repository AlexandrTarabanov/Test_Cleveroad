import React, {Component} from 'react';
import classes from "./Product.module.css"

class Product extends Component {

    constructor(props) {
        super(props);
        this.productContent = props.productContent
        this.productDescription = props.productDescription
        this.productPrice = props.productPrice
        this.productDiscount = props.productDiscount
        this.productDiscountEnd = props.productDiscountEnd
        this.productPhoto = props.productPhoto
        this.productId = props.productId
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    }

    handleRemoveProduct(id) {
        this.props.removeProduct(id)
    }

    render() {
        return (
            <div className={classes.productItem}>
                <div><img src="https://via.placeholder.com/200" alt=""/></div>
                <h4>{this.productContent}</h4>
                <div>{this.productDescription}</div>
                <h5>Price: {this.productPrice - (this.productPrice * this.productDiscount / 100)} $</h5>
                <div>Discount: {this.productDiscount} %</div>
                <div>{this.productDiscountEnd}</div>
                <button onClick={() => this.handleRemoveProduct(this.productId)}>
                    Delete
                </button>
            </div>
        )
    }
}
export default Product;