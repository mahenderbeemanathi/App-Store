// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {imageUrl, appName} = appItem
  return (
    <li className="list-item">
      <img className="img" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
