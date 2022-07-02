import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryContainer, ProductsContainer, Title } from "../shop/shop.styles";

const Category = () => {
    const { categoryName } = useParams();
    const {categoriesMap} = useContext(CategoriesContext);


    return (
        <CategoryContainer >
            <Title as='h2' >{categoryName}</Title>
            <ProductsContainer >
                {categoriesMap[categoryName].map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </ProductsContainer>
        </CategoryContainer>
    )
}

export default Category;