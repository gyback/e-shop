import "./directory.styles.jsx"
import categories from "../../assets/cactegories.json";
import DirectoryItem from "./directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = () => {
      const renderCategories = () => (
        categories.map((category)=>(
          <DirectoryItem key={category.id} category={category} />
        ))
      );

      return (
        <DirectoryContainer className="categories-container">
            {renderCategories()}
        </DirectoryContainer>
      )
}

export default Directory;