import React from 'react'
import './Homepage.css'
import {FaAward} from 'react-icons/fa'
import search_engine from '../../components/pictures/turners-homepage/car-searchtool.png'

const Homepage = () => {
  return (
    <div className='homepage-background'>
        <div className='homepage-container'> 
            <div className='title-wrapper'>
                <h1>Buy, Sell, Trade and Insure all with Turners Cars</h1>
                <h3>When you can do everything in one place, why go anywhere else?</h3>
            </div>
            <div className='trusted-brand-container'>
                <div className='trusted-brand-div'>
                    <p>We've won the Readers' Digest Trusted Brand award three years in a row.</p>
                    <p><FaAward size={55} className="awards-icons"/><FaAward size={55} className="awards-icons"/><FaAward size={55} className="awards-icons"/></p>
                </div>
            </div>
        </div>
        <div className='homepage-links'>
            <button>Buy or Trade</button>
            <button>Sell</button>
            <button>Finance</button>
            <button>Insurance</button>
        </div>
        <div className='search-engine'>
            <h1>1000's of Quality Cars for Sale</h1>
            <p>Turners Cars is the largest used car network in New Zealand with 19 car dealer locations nationwide. 
                With a huge range of around 3,000 cars for sale (and 1,500 being made ready for sale at any one time) there is truly something for everyone.
                We've been helping kiwis buy and sell used cars for over 50 years and if you would like car finance or car insurance we can provide that as well.
            </p>
        </div>
    </div>
  )
}

export default Homepage