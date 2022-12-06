import React, { useState, useEffect } from 'react'
import Styles from './main.css'
import Logo from '../Logo/main'
import WelcomeLogo from '../../Shared/Images/Welcome.png'

const Header = () => {
  const [show, setShow] = useState(true)
  const [NavBar, setNavBar] = useState(false)
  const threshold = 100
  const [scrollDir, setScrollDir] = useState('up')
  useEffect(() => {
    let previousScrollYPosition = window.scrollY

    const scrolledMoreThanThreshold = currentScrollYPosition =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold

    const isScrollingUp = currentScrollYPosition =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? setShow(false)
          : setShow(true)
        setScrollDir(newScrollDirection)
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0
      }
    }

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id='Home' className='header-main' style={Styles}>
      <div className={`navbar-main ${!show && 'animate'}`}>
        <div className='header-logo'>
          <Logo height='auto' width='50px' background='rgb(176, 175, 175)' />
        </div>
        <div className={`Links ${(NavBar && 'animate' && 'm-fadeIn') || 'm-fadeOut'}`}>
          <li>
            <a href='#Home'>Home</a>
          </li>
          <li>
            <a href='#AboutUs'>About Us</a>
          </li>
          <li>
            <a href='#SectionCards'>Posts</a>
          </li>
          <li>
            <a href='#SectionCards'>Blogs</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </div>
        <i
          className='fa'
          onClick={() => {
            console.log("fafafafa")
            setNavBar(!NavBar)
          }}
        >
          &#xf0c9;
        </i>
      </div>
      <div className='Welcome'>
        <img src={WelcomeLogo} />
      </div>
    </div>
  )
}

export default Header
