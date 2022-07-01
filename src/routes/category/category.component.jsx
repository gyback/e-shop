import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

const Category = () => {
    const { categoryName } = useParams();
    const {categoriesMap} = useContext(CategoriesContext);


    return (
        <div className="category-container">
            <h2 className="title">{categoryName}</h2>
            <div className="products-container">
                {categoriesMap[categoryName].map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Category;