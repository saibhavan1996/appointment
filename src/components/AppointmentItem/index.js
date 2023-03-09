import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, getFavorite} = props
  const {id, name, date, isFavorite} = appointmentDetails

  const selectFavorite = () => {
    getFavorite(id)
  }

  const dateTime = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const favorite = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-list-item">
      <div className="details">
        <p className="app">{name}</p>
        <p className="date">date: {dateTime}</p>
      </div>
      <button className="btn" type="button" onClick={selectFavorite}>
        <img src={favorite} className="star-image" alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
