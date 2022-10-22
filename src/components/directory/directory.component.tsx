import "./directory.styles"
import categories from "../../assets/cactegories.json";
import DirectoryItem from "./directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

export type DirectoryItemType = {
  id: number;
  title: string;
  imageUrl: string;
}

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