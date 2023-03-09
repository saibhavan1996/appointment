import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], name: '', date: ''}

  addAppointmentDetails = e => {
    e.preventDefault()
    const {name, date} = this.state
    const newList = {
      id: uuidV4(),
      name,
      date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newList],
      name: '',
      date: '',
    }))
  }

  getName = e => {
    this.setState({name: e.target.value})
  }

  getDate = e => {
    this.setState({date: e.target.value})
  }

  getFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  getStaredList = () => {
    const {appointmentsList} = this.state
    const list = appointmentsList.filter(each => {
      if (each.isFavorite === true) {
        return {...each}
      }
      return false
    })
    this.setState({appointmentsList: list})
  }

  render() {
    const {name, date, appointmentsList} = this.state
    return (
      <div className="appointment-main-bg-container">
        <div className="app-container">
          <div className="appointment-bg-container">
            <form className="form" onSubmit={this.addAppointmentDetails}>
              <h1 className="heading">Add Appointment</h1>
              <div className="input-container">
                <label htmlFor="name" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  className="name-input"
                  id="name"
                  value={name}
                  onChange={this.getName}
                />
              </div>
              <div className="input-container">
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  value={date}
                  type="date"
                  className="name-input"
                  id="date"
                  onChange={this.getDate}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="separator" />
          <div className="appointment-bg-container">
            <h1 className="list-head">Appointments</h1>
            <button
              type="button"
              className="button"
              onClick={this.getStaredList}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-list">
            {appointmentsList.map(each => (
              <AppointmentItem
                key={each.id}
                appointmentDetails={each}
                getFavorite={this.getFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
