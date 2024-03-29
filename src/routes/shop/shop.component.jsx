import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategories } from "../../store/categories/categories.slice";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(()=> {
      dispatch(fetchCategories())
      }, []);
    

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path="/:categoryName" element={<Category />}/>
        </Routes>
    )
}

export default Shop;