import ProductInfos from '../fetch-data/product-data.json';

///<Products  key={id} productName ={product.name} productRating = {product.rating} productPrice = {product.price} productDescription = {product.description} productImg = {product.photo} horizontal />

function Products() {
    return  ProductInfos.map((product) => 
        <div className="mainDiv" >
            <div className="card">
                <div className="cardData">
                    <img src={product.photo} alt="" />
                    <div className="dataContainer">
                        <h4> {product.name}</h4> 
                        <p className="productPara">Price : <span>{product.price}</span></p> 
                        <p className="productPara">Rating : {product.rating}<span></span></p> 
                        <p className="productPara">Description : {product.description}</p> 
                        <button className="addToCart"><span>Add To Cart </span></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Products;