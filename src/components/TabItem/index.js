// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, selectedTabItem} = props
  const {tabId, displayText} = tabDetails

  const selectedTabDetails = () => {
    selectedTabItem(tabId)
  }

  const tabSelectedClass = isActive ? 'active-tab' : ''
  const hrLineActive = isActive ? 'hr-line-active' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={selectedTabDetails}
        className={`list-heading ${tabSelectedClass}`}
      >
        {displayText}
      </button>
      <hr className={`hr-line ${hrLineActive}`} />
    </li>
  )
}

export default TabItem
