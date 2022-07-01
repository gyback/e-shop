import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    
    return (
        <Fragment>
            
            {
                Object.keys(categoriesMap).map(title => (
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                ))
            }
            
        </Fragment>
    );
}

export default CategoriesPreview;