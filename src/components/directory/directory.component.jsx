import "./directory.styles.scss"
import CategoryItem from "./category-item/category-item.component";
import categories from "../../cactegories.json";

const Directory = () => {
      const renderCategories = () => (
        categories.map((category)=>(
          <CategoryItem key={category.id} category={category} />
        ))
      );

      return (
        <div className="categories-container">
            {renderCategories()}
        </div>
      )
}

export default Directory;