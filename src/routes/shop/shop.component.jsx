import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/categories/categories.slice";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        const getCategoriesMap = async () => {
          const categoryMap = await getCategoriesAndDocuments();
          dispatch(setCategories(categoryMap));
        }
        
        getCategoriesMap();
      }, []);
    

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path="/:categoryName" element={<Category />}/>
        </Routes>
    )
}

export default Shop;