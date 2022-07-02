import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path="/:categoryName" element={<Category />}/>
        </Routes>
    )
}

export default Shop;