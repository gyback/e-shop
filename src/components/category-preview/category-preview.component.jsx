import { CategoryContainer, ProductsContainer, Title } from "../../routes/shop/shop.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title, products}) => {

    return (
        <CategoryContainer>         
            <h2>
                <Title to={title} >
                    {title}
                </Title>
            </h2>
            <ProductsContainer>
                {products.slice(0,4).map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </ProductsContainer>
        
        </CategoryContainer>
    )
}

export default CategoryPreview;