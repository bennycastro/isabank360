import React from 'react'
import styles from '../styles'
import {   Navbar,   Footer , CTA       
         } from '../components'
const Crea = () => {
  return (
<div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
              
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Crea