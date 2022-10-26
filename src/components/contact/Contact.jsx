import React from 'react'
import contactImage from '../../images/contact.png'
import './contact.css'


export default class Contact extends React.Component {

  handleClick = () => {
    let modal = document.getElementById('modal')
    if (modal.style.display === 'none') {
      modal.style.display = 'block'
    } else
      modal.style.display = 'none'
  }

  closeModal = () => {
    let modal = document.getElementById('modal')
    modal.style.display = 'none'

  }
  render() {

    return (
      <div className="contact">
        <div className="container contact-container  d-flex justify-content-center">
          <div className="form-img">
            <img src={contactImage} alt="Contact us" />
          </div>
          <div className="form position-relative">
            <form>
              <h3>
                Any queries?
              </h3>
              <input type="text" placeholder='Name' />
              <input type="number" name="" id="" placeholder='0' />
              <div className='position-relative'>
                <textarea name="" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                <div className="refresh" id='btn' onClick={this.handleClick}>
                  <i class="bi bi-arrow-clockwise"></i>
                </div>
              </div>
            </form>
            <div className="Mymodal position-absolute" id='modal'>
              <div className=" position-absolute" id='close-btn' onClick={this.closeModal}>
                <i class="bi bi-x-circle"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">You’re missing out on key Grammarly features!</h5>
                <small>Sign up to:</small>
                <ul>
                  <li>Get Grammarly for Google Docs Beta</li>
                  <li>Toggle Grammarly for any website</li>
                  <li>Start your personalized dictionary</li>
                </ul>
                <button className='btn btn-success w-100'>Sign Up</button>
                <small className='opacity-50 py-2'>Already have an account?  <a href="/"> Log in</a> </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
