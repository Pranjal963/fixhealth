import React from 'react'
import { dataArray } from './CardData'
import styles from './card.module.css'
const Card = ({img, problem,review,name,occupation}) => {
  return (
    <div className={styles.customerCard}>
     <p className={styles.prob}>{problem}</p>   
    <img src={img} alt="he" />
    <p className={styles.review}>{review}</p>
    <p className={styles.customerName}>{name}</p>
    <p className={styles.customerOccupation}>{occupation}</p>
  </div>
  )
}

export default Card
