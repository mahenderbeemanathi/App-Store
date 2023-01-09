// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateTabId, isActive} = props

  const {tabId, displayText} = tabItemDetails

  const activeTabButton = isActive ? 'active-button' : 'button'

  const onClickButton = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button className={activeTabButton} type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
