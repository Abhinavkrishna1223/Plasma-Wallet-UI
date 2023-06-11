import React from 'react'
import './Mainsecond.css'
import phimg from '../assets/ph2.png'
import check from '../assets/check.png'
import skull from '../assets/skull.png'


function Mainsecond() {
    return (
        <div className='container'>
            <div className='personality'>

                <div className="p-txt">
                    Personality
                </div>

                <div className="p-txt">
                    is important
                </div>

                <div className="psmall-txt">
                    Customize your wallet experience
                </div>
            </div>

            <div className="img-wrap">
                <img src={phimg} alt="" />
            </div>

            <div className="privacy">

                <div className="blacktxt">
                    <div className="circleImg">
                        <img  src={check} alt="" />
                    </div>

                    <div className="pvctxt">
                        Date Not Collected
                    </div>

                    <div className="pvt">
                        The developer does not collect any data from
                        <br />
                        this app
                    </div>
                </div>

                <div className="alltxt">
                    <div className="pmtxt">
                        Privacy
                        <br />
                        Matters
                    </div>

                    <div className="white-txt">
                        We don't collect any information
                        <br />
                        about users and don't request KYC
                    </div>
                </div>

            </div>

            <div className="skull">

                <div className="skull-txt">
                    <div className="skgrdnt">
                        And
                        <br />
                        Security
                        <br />
                        Matters
                        <br />
                        The Most
                    </div>

                    <div className="sk-desc">
                        Your private keys and seed phrase are
                        <br />
                        stored in app's local storage and
                        <br />
                        encrypted with your beautiful face
                    </div>
                </div>

                <div className="skull-img">
                    <img src={skull} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Mainsecond