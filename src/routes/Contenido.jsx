import React from 'react'
import styles from '../styles'
import {   Navbar,   Footer , Stats , CarDeal       
         } from '../components'
const Contenido = () => {
  return (
<div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h1>Contenido</h1>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats />
       
          <CarDeal />
         
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contenido