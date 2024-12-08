import React, { useState, useEffect, useRef } from "react";
import "./products.css";
import { useInputHighlight } from "./customHooks/useInputHighlight";
import { useLogData } from "./customHooks/useLogData";

function CurrencyConverter({ priceInUAH, exchangeRate }) {
    exchangeRate = 41;
    const priceInUSD = (priceInUAH / exchangeRate).toFixed(2); 

    return (
        <>
            <p>Price in USD: {priceInUSD} $</p>
        </>
    );
}

function ProductsInfo(props) {
    const [products, setProducts] = useState([]); 
    const [comment, setComment] = useState('');    
    const [newProductName, setNewProductName] = useState(''); 
    const [newProductPrice, setNewProductPrice] = useState('');

    const { exchangeRate } = props; 

    // Input ref
    const productNameRef = useRef(null);
    const productPriceRef = useRef(null);
    const commentRef = useRef(null);
    
    useInputHighlight(productNameRef);
    useInputHighlight(productPriceRef);
    useInputHighlight(commentRef);

    const addProduct = () => {
        const newProduct = {
            id: products.length + 1, 
            name: newProductName,
            price: newProductPrice,
        };
        setProducts([...products, newProduct]);
        setNewProductName('');  
        setNewProductPrice('');
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(comment);
        alert(`Ваш відгук: "${comment}" додано успішно!`);
        setComment(''); 
    };

    useLogData(products);
    // comment
    useEffect(() => {
        console.log("Comment changed:", comment);
    }, [comment]);

    return (
        <>
            <div className="addProductsFeed">
                <form onSubmit={handleSubmit}>
                    <div className="comments">
                        <textarea
                            ref={commentRef} // ref
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Leave a comment"
                        />
                        <button type="submit">Submit comment</button>
                    </div>
                </form>

                <div className="productsAddFeed">
                    <input
                        ref={productNameRef} // ref
                        type="text"
                        placeholder="Product name"
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                    />
                    <input
                        ref={productPriceRef} // ref
                        type="number"
                        placeholder="Product price"
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(e.target.value)}
                    />
                    <button onClick={addProduct}>Add Product</button>
                </div>
            </div>

            <div className="productsFeed">
                <h2>Product List</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - {product.price} UAH
                            <CurrencyConverter priceInUAH={product.price} exchangeRate={exchangeRate} />
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export { ProductsInfo };
