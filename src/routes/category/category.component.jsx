import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { CategoryContainer, ProductsContainer, Title } from "../shop/shop.styles";

const Category = () => {
    const { categoryName } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)


    return (
        <CategoryContainer >
            <Title as='h2' >{categoryName}</Title>
            <ProductsContainer >
                {categoriesMap[categoryName] && categoriesMap[categoryName].map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </ProductsContainer>
        </CategoryContainer>
    )
}

export default Category;