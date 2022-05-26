import React from 'react'
import './Homepage.css'
import {FaAward} from 'react-icons/fa'
import SearchLabel from '../SearchLabel/SearchLabel'
import Convertible from '../../components/pictures/turners-homepage/Convertible.png'
import Wagon from '../../components/pictures/turners-homepage/Wagon.png'
import Utility from '../../components/pictures/turners-homepage/Utility.png'
import Coupe from '../../components/pictures/turners-homepage/Coupe.png'
import Hatchback from '../../components/pictures/turners-homepage/Hatchback.png'
import Van from '../../components/pictures/turners-homepage/Van.png'
import Sedan from '../../components/pictures/turners-homepage/Sedan.png'
import SUV from '../../components/pictures/turners-homepage/SUV.png'
import Lease from '../../components/pictures/turners-homepage/Lease.svg'
import FuelEconomy from '../../components/pictures/turners-homepage/FuelEconomy.svg'
import Seats from '../../components/pictures/turners-homepage/6+Seats.svg'
import Certified from '../../components/pictures/turners-homepage/TurnersCertified.svg'
import Discounted from '../../components/pictures/turners-homepage/Discounted.svg'
import AllWheelDrive from '../../components/pictures/turners-homepage/4WheelDrive.svg'
import PopularOption from '../PopularOption/PopularOption'

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
            <form className='search-engine-form'>
                <fieldset className='search-engine-fieldset'>
                    <div className='car-checkboxes'>
                        <SearchLabel image={Convertible} value='convertible' text="Convertible" />
                        <SearchLabel image={Wagon} value='wagon' text="Wagon" />
                        <SearchLabel image={Utility} value='utility' text="Utility" />
                        <SearchLabel image={Coupe} value='coupe' text="Coupe" />
                        <SearchLabel image={Hatchback} value='hatchback' text="Hatchback" />
                        <SearchLabel image={Van} value='van' text="Van" />
                        <SearchLabel image={Sedan} value='sedan' text="Sedan" />
                        <SearchLabel image={SUV} value='SUV' text="SUV" />
                    </div>
                    <div className='search-engine-right-selectors'>
                        <div className='search-engine-input'>
                            <input name="searchfor" type="text" placeholder="Search for Anything" autocomplete="off"/>
                        </div>
                        <div className='search-engine-input'>
                        <label>Make</label>
                            <select>
                                <option>All Makes</option>
                                <option>Ford</option>
                                <option>Great Wall</option>
                                <option>Isuzu</option>
                                <option>Lexus</option>
                                <option>Mahindra</option>
                                <option>Mazda</option>
                                <option>Nissan</option>
                            </select>
                        </div>
                        <div className='search-engine-input'>
                            <label>Model</label>
                            <select>
                                <option>All</option>
                            </select>
                        </div>
                        <div className='search-engine-year'>
                            <label>Year</label><br/>
                            <select>
                                <option>Any</option>
                            </select>
                            <span>To</span>
                            <select>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>
                    <div className='search-engine-middle-selectors'>
                    <div className='search-engine-middle-double-selector '>
                            <label>Odometer</label><br/>
                            <select>
                                <option>Any Kms</option>
                            </select>
                            <span>To</span>
                            <select>
                                <option>Any Kms</option>
                            </select>
                        </div>
                        <div className='search-engine-middle-double-selector'>
                            <label>Price</label><br/>
                            <select>
                                <option>Any Price</option>
                            </select>
                            <span>To</span>
                            <select>
                                <option>Any Price</option>
                            </select>
                        </div>
                        <div className='search-engine-input search-engine-middle-width'>
                            <label>Locations</label>
                            <select>
                                <option>All Locations</option>
                            </select>
                        </div>
                        <div className='search-engine-input search-engine-middle-width'>
                            <label>Sale Method</label>
                            <select>
                                <option>All Sale Methods</option>
                            </select>
                        </div>
                    </div>
                    <h3>Popular Options</h3>
                    <div className='search-engine-third-row'>
                        <div className='popular-options'>
                            <PopularOption image={FuelEconomy} value='FuelEconomy' text="Fuel Economy" />
                            <PopularOption image={Discounted} value='FuelEconomy' text="Discounted" />
                            <PopularOption image={AllWheelDrive} value='4 Wheel Drive' text="4 Wheel Drive" />
                            <PopularOption image={Seats} value='FuelEconomy' text="6+ Seats" />
                            <PopularOption image={Certified} value='FuelEconomy' text="Turners Certified" />
                            <PopularOption image={Lease} value='FuelEconomy' text="Ex Lease" />
                        </div>
                        <input className='search-submit' type={'submit'} value="Find a Car"/>
                    </div>
                    
                </fieldset> 
            </form>
        </div>
    </div>
  )
}

export default Homepage