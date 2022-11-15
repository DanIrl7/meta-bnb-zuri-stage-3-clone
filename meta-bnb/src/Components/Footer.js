import React from 'react'
import meta from '../images/Homepage/footer/footer-logo.png'
import fb from "../images/Homepage/footer/facebook-263-721950.png"
import ig from "../images/Homepage/footer/instagram-216-721958.png"
import twitter from "../images/Homepage/footer/twitter-241-721979.png"
import copyright from "../images/Homepage/footer/copyright.png"


export default function Footer() {
  return (
    <footer>
        <div className="logos">
        <img
        src={meta}
        alt='meta'
        id='meta-ft' />
        <div className="social">
        <img
        src={fb}
        alt='fb' />
           <img
        src={ig}
        alt='ig'
        id='ig' />
           <img
        src={twitter}
        alt='twitter' />
        </div>

        <img
        src={copyright}
        alt='copyright' />
        </div>

        <div className="sub-links">
            <div className="footer-col">
                <h4>Community</h4>
            <ul>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
            </ul>
            </div>
            <div className="footer-col">
               <h4>Places</h4>
            <ul>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
            </ul>
            </div>
            <div className="footer-col">
               <h4>About us</h4>
            <ul>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
            </ul>
            </div>
        </div>
    </footer>
  )
}
