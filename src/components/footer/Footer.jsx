import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 footer-item">
                        <h4>
                            Useful Links
                        </h4>
                        <ul>
                            <li>What is HomieTouch</li>
                            <li>Our Team</li>
                            <li>Contact</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                        </ul>

                    </div>
                    <div className="col-12 col-md-6 col-lg-3 footer-item">
                        <h4>
                            Cities
                        </h4>
                        <ul>
                            <li>Banglore</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 footer-item">
                        <h4>
                            Work with us
                        </h4>
                        <ul>
                            <li>Work as Maid</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 footer-item">
                        <h4>
                            Connect with us
                        </h4>
                        <ul>
                            <li><i class="bi bi-telephone"></i> 1234567890</li>
                            <li><i class="bi bi-envelope"></i> homietouch@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="copy text-center opacity-25">
                   Designed By Daniatou
                </div>

            </div>
        </footer>
    )
}
