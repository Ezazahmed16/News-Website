import React from 'react'
import Subscribe from '../news/Subscribe'

const AppFooter = () => {
  return (
    <>
      <footer style={{ backgroundColor: '#462255' }} className="footer p-10 text-white justify-around items-start">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <div className="">
          <header className="footer-title">Subscribe</header>
          <Subscribe />
        </div>
      </footer>
    </>
  )
}

export default AppFooter