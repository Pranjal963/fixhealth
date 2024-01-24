import React, { useState } from 'react'
import styles from './hero.module.css'
import Navbar from '../Navbar/Navbar';
import RegForm from '../RegistrationForm/RegForm';
import BookingForm from '../BookingForm/BokkingForm';
const Hero = () => {
  const [issubmited ,setIsSubmited]=useState(false)
  return (
    <div className={styles.Mainwrapper} >
<Navbar/>
<div className={styles.regForm}>
<RegForm  setIsSubmited={setIsSubmited}/>
</div>
{issubmited && <div> <BookingForm setIsSubmited={setIsSubmited}/> </div> } 

    </div>
  )
}

export default Hero;


