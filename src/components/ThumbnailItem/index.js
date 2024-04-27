// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  // console.log(props)
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailAltText, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }
  
  /* ---Using Ternary Operators ---*/
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-list-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
