
import React from 'react';
import './MainThird.css';
import bigphone from '../assets/bigphoneimg.png';
import darrow from '../assets/doublearr.png';
import unicorncard from '../assets/unicorn.png';
import parliament from '../assets/parliament.png';
import phoneImg from '../assets/phone.png';

function MainThird() {
    return (
        <div>
            <div className='MainThird-container'>
                <div className="handtxt">
                    Everything you need is in your 🙏 hands
                </div>

                <div className="bigPhone">

                    <div className="bgImg">
                        <img src={bigphone} alt="" />
                    </div>

                    <div className="col">
                        <div className="bphone-txt">
                            Track your asset
                            <br />
                            portfolio and
                            <br />
                            DeFi positions
                            <br />
                            across multiple
                            <br />
                            chains
                        </div>

                        <div className="bpsmall-txt">
                            With a real-time on-chain data and
                            <br />
                            analytics
                        </div>


                    </div>

                </div>

                <div className="black-cards">
                    <div className="card-I">
                        <img className='resT' src={darrow} alt="" />

                        <div className="crdTxt">
                            Swap 10,000 assets at the best price
                            <br />
                            on any EVM chain
                        </div>

                        <div className="smcrdTxt">
                            Powerful HyperDEX aggregator
                        </div>

                        <div className="bigCard">
                        <img  src={unicorncard} alt="" />
                        </div>

                    </div>

                    <div className="card-I">

                        <img className='resT' src={parliament} alt="" />

                        <div className="crdTxt">
                            Swap 10,000 assets at the best price
                            <br />
                            on any EVM chain
                        </div>

                        <div className="smcrdTxt">
                            Bank Cards, Apple Pay, Bank Wires are available
                        </div>

                        <div className="secondPhone">
                        <img src={phoneImg} alt="" />
                        </div>

                    </div>

                </div>

                <div className="black-cards">
                    <div className="card-I">
                        <img  className='resT' src={darrow} alt="" />

                        <div className="crdTxt">
                            Swap 10,000 assets at the best price
                            <br />
                            on any EVM chain
                        </div>

                        <div className="smcrdTxt">
                            Powerful HyperDEX aggregator
                        </div>

                        <div className="bigCard">
                        <img  src={unicorncard} alt="" />
                        </div>

                    </div>

                    <div className="card-I">
                        <img className='resT' src={parliament} alt="" />

                        <div className="crdTxt">
                            Swap 10,000 assets at the best price
                            <br />
                            on any EVM chain
                        </div>

                        <div className="smcrdTxt">
                            Bank Cards, Apple Pay, Bank Wires are available
                        </div>

                        <div className="secondPhone">
                        <img src={phoneImg} alt="" />
                        </div>
                        
                    </div>

                </div>




            </div>
        </div>
    )
}

export default MainThird