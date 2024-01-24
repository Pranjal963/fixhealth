import React from 'react'
import styles from './navbar.module.css'
import fixHealthLogo from '../../Assests/fixHelthLogo.png'
const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
    <img src={fixHealthLogo} alt=""  className={styles.logoDiv}/>
    <div className={styles.Navbar}>
        <p>Home</p>
        <p>Services</p>
        <p>Blogs</p>
        <p>About</p>
        <button>Book Now</button>
    </div>
    </div>
  )
}

export default Navbar
