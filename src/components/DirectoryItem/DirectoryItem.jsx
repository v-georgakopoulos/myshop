import "./DirectoryItem.scss"

function DirectoryItem({category}) {
    const {imageUrl, title, route} = category;

  return (
    <div className='directory-item-container'>
        <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`
        }}>
        </div>
        <div className="directory-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>
  )
}

export default DirectoryItem