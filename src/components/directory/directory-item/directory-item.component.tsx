import { BackgroundImage, DirecoryBody, DirectoryItemContainer } from "./directory-item.styles";
import {DirectoryItemType} from "../directory.component";


type DirectoryItemProps = {
    category: DirectoryItemType
}

const DirectoryItem = ({category:{title, imageUrl}}:DirectoryItemProps) => {
return (
    <DirectoryItemContainer  to={`/shop/${title.toLowerCase()}`} >
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <DirecoryBody  >
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
        </DirecoryBody>
    </DirectoryItemContainer>
)
}

export default DirectoryItem;