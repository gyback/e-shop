import { CategoryContainer, ProductsContainer, Title } from "../../routes/shop/shop.styles";
import ProductCard from "../product-card/product-card.component";
import { CategoryType } from "../../store/categories/categories.types";

const CategoryPreview = ({title, items}:CategoryType) => {

    return (
        <CategoryContainer>         
            <h2>
                <Title to={title} >
                    {title}
                </Title>
            </h2>
            <ProductsContainer>
                {items.slice(0,4).map((items) => {
                    return (
                        <ProductCard key={items.id} product={items} />
                    )
                })}
            </ProductsContainer>
        
        </CategoryContainer>
    )
}

export default CategoryPreview;