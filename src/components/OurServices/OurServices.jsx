import React from 'react'
import './OurServices.css'
import serviceImage from '../../images/service1.png'

export default function OurServices() {
    return (
        <div className="container">
            <div className="title my-5">
                <h2 className='py-3'>
                    Our Services
                </h2>
                <a href="#"> MORE SERVICES →</a>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-lg-4 ourServiceItem my-3">
                    <div class="card">
                        <img src={serviceImage} class="card-img-top" alt="Our service Illustration" />
                        <div class="card-body">
                            <h4 class="card-text text-center">Service Name</h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 ourServiceItem my-3">
                    <div class="card">
                        <img src={serviceImage} class="card-img-top" alt="Our service Illustration" />
                        <div class="card-body">
                            <h4 class="card-text text-center">Service Name</h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 ourServiceItem my-3">
                    <div class="card">
                        <img src={serviceImage} class="card-img-top" alt="Our service Illustration" />
                        <div class="card-body">
                            <h4 class="card-text text-center">Service Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
