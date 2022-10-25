import React from 'react'
import about_image from '../../images/image1.png'
import './About.css'


export default function About() {
    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col-lg-6 col-12 my-3 px-3">
                    <img src={about_image} alt="about" />
                </div>
                <div className="col-lg-6 col-12 my-5 px-3 sub-title">
                    <span>
                        WE ARE HOMIETOUCH
                    </span>
                    <h2 className='py-3'>
                        Running Short Of Time To Make Your Home Shine?
                    </h2>
                    <p className='opacity-5 fs-4'>
                        We get it. Ease yourself while we give your home a sparkle effect!
                        At Homietouch, we send professional helpers your way to do the cleaning for you. Forget about dusting, washing, cooking and every other household work. Our helpers do it fast and flawless so that you can spend time on what you love.
                    </p>
                    <p className='opacity-5 fs-4'>
                    At Homietouch, we send professional helpers your way to do the cleaning for you. Forget about dusting, washing, cooking and every other household work. Our helpers do it fast and flawless so that you can spend time on what 
                    </p>
                </div>
            </div>
        </div>
    )
}
