import React from 'react'
import styles from '../styles'
import {   Navbar,   Footer  , Testimonial, Stats       
         } from '../components'

const Blog = () => {
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
        <Stats />
         
          <Testimonial />
         
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Blog