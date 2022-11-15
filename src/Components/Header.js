import React from 'react'
import logo from '../images/Homepage/metabnb-logo.png'

export default function Header() {
  return (
    <header>
        <img
        id="logo"
        src={logo}
        alt="meta-logo" />
        <nav>
        <ul>
            <a href='./#'><li>Home</li></a>
            <a href='./#'><li>Place to stay</li></a>
            <a href='./#'><li>NFTs</li></a>
            <a href='./#'><li>Community</li></a>
        </ul>
        </nav>
        <button className='wallet'>Connect Wallet</button>
    </header>
  )
}