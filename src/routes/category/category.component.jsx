import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/categories.selector";
import { CategoryContainer, ProductsContainer, Title } from "../shop/shop.styles";

const Category = () => {
    const { categoryName } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading);

    
    return (
        <CategoryContainer >
            <Title as='h2' >{categoryName}</Title>
            {isLoading ?
                <Spinner />
                :<ProductsContainer >
                    {categoriesMap[categoryName] && categoriesMap[categoryName].map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
                </ProductsContainer> 
            }
        </CategoryContainer>
    )
}

export default Category;