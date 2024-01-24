import React from 'react'
import styles from './regiform.module.css'
import { ReactComponent as UserLogo } from '../../Assests/person-circle.svg'
import { ReactComponent as PhoneLogo } from '../../Assests/phone.svg'
import formlogo from '../../Assests/formLogo.png'
const RegForm = ({setIsSubmited}) => {
  return (
<div className={styles.mainDiv}>
      <div className={styles.InnerDiv}>
        <h3>Book an Appointment for <br /> Rs1000 FREE</h3>
        <h5>60+ Expert Physiotherapists for 200+ Conditions</h5>
        <div className={styles.formInputs}>
          <div className={styles.inputWithLogo}>
            <UserLogo className={styles.logoIcon} />
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={styles.inputWithUnderline}>
            <PhoneLogo />
            <input type="tel" placeholder="Enter your mobile number" />
          </div>
          <div className={styles.submitButton} onClick={() => setIsSubmited((prev) => !prev)}>
  Start Your Recovery
</div>
          <img src={formlogo} alt="logo" className={styles.logoImage} />
        </div>
        
      </div>
    

    </div>
  )
}

export default RegForm
