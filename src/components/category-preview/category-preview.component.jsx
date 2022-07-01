import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title, products}) => {

    const navigate = useNavigate();

    const handleGoToCategoryPage = () => {
        navigate(title);
    }


    return (
        <div className="category-container">         
            <h2>
                <span className="title" onClick={() => handleGoToCategoryPage(title)}>
                    {title}
                </span>
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