import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux/es/exports";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    
    return (
        <Fragment>
            
            {
                Object.keys(categoriesMap).map(title => (
                    <CategoryPreview key={title} title={title} items={categoriesMap[title]} />
                ))
            }
            
        </Fragment>
    );
}

export default CategoriesPreview;