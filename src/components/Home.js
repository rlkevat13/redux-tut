import React from "react";

function Home(){
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://s7d1.scene7.com/is/image/dish/2020-apple-iphone-12-black-front?$ProductBase$&fmt=webp-alpha" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;