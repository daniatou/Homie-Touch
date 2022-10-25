import React from 'react'
import './service.css'
import step1_image from '../../images/step1.png'
import step2_image from '../../images/step2.png'
import step3_image from '../../images/step3.png'

export default function Service() {
  return (
   <div className="container-fluid service">
    <div className="title text-center">
        <span>
            WE ARE HOMIETOUCH
        </span>
        <h2 className='py-3'>
        How Does It Work?
        </h2>
    </div>
     <div className="row">
        <div className="col-12 col-lg-4 text-center service-item">
            <img src={step1_image} alt="Step1-Imag" />
            <h4>
               You ask
            </h4>
            <p>
               You tell us what services you are looking for using the Homietouch app
            </p>
        </div>
        <div className="col-12 col-lg-4 text-center service-item">
            <img src={step2_image} alt="Step1-Imag" />
            <h4>
               We find
            </h4>
            <p>
               We find the right maid specialized in the services you prefer. All our maids are verified and strive to give you the best experience
            </p>
        </div>
        <div className="col-12 col-lg-4 text-center service-item">
            <img src={step3_image} alt="Step1-Imag" />
            <h4>
                Get the job done
            </h4>
            <p>
            Your Homietouch helper reaches your place and does the work exactly the way you want
            </p>
        </div>
     </div>
   </div>
  )
}
