import './index.css'
const AppointmentItem = props => {
  const {appointmentDetails, key, staredImage} = props
  const {id, title, date, isStared} = appointmentDetails
  const clickOnStaredInage = () => {
    staredImage(id)
  }
  const starImage = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-item">
      <div className="title-starImage-container">
        <h1 className="title-heading">{title}</h1>
        <div>
          <img
            src={starImage}
            onClick={clickOnStaredInage}
            className="star-image"
          />
        </div>
      </div>
      <p className="date-paragraph">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
