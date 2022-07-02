import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title, products}) => {

    return (
        <div className="category-container">         
            <h2>
                <Link to={title} className="title" >
                    {title}
                </Link>
            </h2>
            <div className="products-container">
                {products.slice(0,4).map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </div>
        
        </div>
    )
}

export default CategoryPreview;