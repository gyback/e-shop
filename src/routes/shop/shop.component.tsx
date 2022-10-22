import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchCategories, useFetchCategoriesDispatch } from "../../store/categories/categories.slice";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useFetchCategoriesDispatch();
    
    useEffect(()=> {
      dispatch(fetchCategories())
      }, []);
    

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path="/:categoryName" element={<Category />}/>
            <Route path="/re">
                
            </Route>
        </Routes>
    )
}

export default Shop;