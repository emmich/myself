import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <div className="header container-fluid">
      <a href="#" className="logo"><img src="/assets/logo.png" /></a> 
      <div className="right_header">
        <ul>
          <li className="links"><a href="#me">About</a></li>
          <li className="links"><a href="#works">Projects</a></li>
          <li className="links"><a href="#contact" className="cv">get CV</a></li>
        </ul>
      </div>
    </div>
  )
}
