import "./category-item.styles.scss"
const CategoryItem = ({category:{title, imageUrl}}) => {
return (
    <div className="category-container" >
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})` }}></div>
        <div className="category-body-container" >
            <h2 className="categoryName">{title.toUpperCase()}</h2>
            <p className="subtitle" >Shop Now</p>
        </div>
    </div>
)
}

export default CategoryItem;