import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'
const initialAppointmentList = []
class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentList: initialAppointmentList,
    starButton: false,
  }
  staredImage = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStared: !eachAppointment.isStared}
        }
        return eachAppointment
      }),
    }))
  }
  staredButton = () => {
    this.setState(prevState => ({
      starButton: !prevState.starButton,
    }))
  }
  clickOnAddButton = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStared: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }
  changeOnTitlInput = event => {
    this.setState({
      title: event.target.value,
    })
  }
  changeOnDateInput = event => {
    this.setState({
      date: event.target.value,
    })
  }
  render() {
    const {title, date, appointmentList, starButton} = this.state
    const starButtonStatus = starButton
      ? 'activeStaredBtn'
      : 'inActiveStaredBtn'
    return (
      <div className="big-container">
        <div className="inner-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="form-appointments-image-container">
            <form className="form-container" onSubmit={this.clickOnAddButton}>
              <label
                htmlFor="titleInputElement"
                className="input-element-headings"
              >
                TITLE
              </label>
              <input
                type="text"
                id="titleInputElement"
                className="input-element"
                placeholder="Title"
                onChange={this.changeOnTitlInput}
                value={title}
              />
              <label
                htmlFor="dateInputElement"
                className="input-element-headings"
              >
                DATE
              </label>
              <input
                type="date"
                id="dateInputElement"
                className="input-element"
                onChange={this.changeOnDateInput}
                value={date}
              />
              <button className="button">Add</button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="appointments-image"
              />
            </div>
          </div>
          <hr />
          <div className="bottom-starButton-appointments-container">
            <h1 className="bottom-main-heading">Appointments</h1>
            <button className={starButtonStatus} onClick={this.staredButton}>
              Stared
            </button>
          </div>
          <ul className="appointmentList-container">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                key={eachAppointment.id}
                staredImage={this.staredImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
