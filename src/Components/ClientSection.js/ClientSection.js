import React, { useState } from 'react'
import styles from './clientsection.module.css'
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation '
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation '
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import  { dataArray } from '../Card/CardData'
const ClientSection = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };
  return (
    <div className={styles.wrapper}>
    <div className={styles.heading}>
      <h2>What says our happy Clients</h2>
    </div>
    <div style={{display:"flex", justifyContent:"space-between",width:"100%"}}>
      <Carousel
        data={dataArray}
        initialSlide={currentSlide}
        renderCardComponent={(ele) => (
          
       <Card
       img={ele.img}
       review={ele.review}
       problem={ele.problem}
       name={ele.name}
       occupation={ele.occupation}
       />
        )}
      />
    </div>
  </div>
  )
}

export default ClientSection
