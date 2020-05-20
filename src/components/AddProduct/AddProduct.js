import React, {Component, useContext} from 'react';
import classes from "./AddProduct.module.css"

class AddProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newProductPhoto: '',
            newProductContent: '',
            newProductDescription: '',
            newProductPrice: '',
            newProductDiscount: '',
            newProductDiscountEnd: '',
        };

        this.handlePhoto = this.handlePhoto.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleDiscount = this.handleDiscount.bind(this);
        this.handleDiscountEnd = this.handleDiscountEnd.bind(this);
        this.writeProduct = this.writeProduct.bind(this);
    }

    handlePhoto(e) {
        this.setState({
            newProductPhoto: e.target.value,
        })
    }

    handleName(e) {
        this.setState({
            newProductContent: e.target.value,
        })
    }

    handleDescription(e) {
        this.setState({
            newProductDescription: e.target.value,
        })
    }

    handlePrice(e) {
        this.setState({
            newProductPrice: e.target.value,
        })
    }

    handleDiscount(e) {
        this.setState({
            newProductDiscount: e.target.value,
        })
    }

    handleDiscountEnd(e) {
        this.setState({
            newProductDiscountEnd: e.target.value,
        })
    }


    writeProduct(event) {
        event.preventDefault()
        this.props.addProduct(
            this.state.newProductPhoto,
            this.state.newProductContent,
            this.state.newProductDescription,
            this.state.newProductPrice,
            this.state.newProductDiscount,
            this.state.newProductDiscountEnd,
        );


        this.setState({
            newProductPhoto: '',
            newProductContent: '',
            newProductDescription: '',
            newProductPrice: '',
            newProductDiscount: '',
            newProductDiscountEnd: '',
        })
    }

    render() {
        return (
            <div className={classes.form}>
                <h1>Add Product</h1>
                <form>
                    <div>
                        <input type="file"
                               value={this.state.newProductPhoto}
                               onChange={this.handlePhoto}/>
                    </div>
                    <div>
                        <input placeholder="Product Name"
                               value={this.state.newProductContent}
                               onChange={this.handleName}
                               maxLength={60}
                               required={true}
                        />
                    </div>
                    <div>
                        <textarea
                            value={this.state.newProductDescription} onChange={this.handleDescription} cols="30"
                            rows="3" maxLength={200} placeholder="Description"></textarea>
                    </div>
                    <div>
                        <input placeholder="Product Price"
                               value={this.state.newProductPrice}
                               onChange={this.handlePrice}/>
                    </div>
                    <div>
                        <input placeholder="Product Discount"
                               value={this.state.newProductDiscount}
                               onChange={this.handleDiscount}/>
                    </div>
                    <div>
                        <input type="date"
                               placeholder="Product DiscountEnd"
                               value={this.state.newProductDiscountEnd}
                               onChange={this.handleDiscountEnd}/>
                    </div>
                    <div>
                        <button onClick={this.writeProduct}>Add Product</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProduct;