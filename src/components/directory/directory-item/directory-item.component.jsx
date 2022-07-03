import { BackgroundImage, DirecoryBody, DirectoryItemContainer } from "./directory-item.styles.jsx";
const DirectoryItem = ({category:{title, imageUrl}}) => {
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