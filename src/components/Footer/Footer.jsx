import React from 'react'
import './Footer.css'
import {BiLocationPlus} from 'react-icons/bi'
import {FaFacebookF, FaInstagram, FaPhoneAlt} from 'react-icons/fa'
import {CgFileDocument} from 'react-icons/cg'
import {AiOutlineMail} from 'react-icons/ai'
import FooterList from '../FooterList/FooterList'

const Footer = () => {
  return (
    <footer>
        <ul className='icon-list'>
            <li><BiLocationPlus size={38} className="footer-icons"/>Branch Details</li>
            <li><FaFacebookF size={38} className="footer-icons"/>Facebook</li>
            <li><FaInstagram size={38} className="footer-icons"/>Instagram</li>
            <li><CgFileDocument size={38} className="footer-icons"/>Newsletter</li>
            <li><AiOutlineMail size={38} className="footer-icons"/>Email Alerts</li>
            <li><FaPhoneAlt size={38} className="footer-icons"/>Contact Us</li>
        </ul>
        <div className='footer-link-list-wrapper'>
          <FooterList children={["Cars", "How to Buy", "Sell Your Car", "Buyer & Seller Fees", "Vehicle Sale Price History Tool", "Shipping Costs"]} />
          <FooterList children={["Finance", "Car & Personal Finance", "Loan Calculator", "Trucks Finance", "Financial Information", "Terms & Conditions"]}/>
          <FooterList children={["Insurance", "Car Insurance", "Mechanical Breakdown Insurance", "General Insurances"]}/>
          <FooterList children={["About Us", "Overview", "Turners Careers", "Privacy Policy", "Turners Live", "The Good Oil Blog"]}/>
        </div>
    </footer>
  )
}

export default Footer