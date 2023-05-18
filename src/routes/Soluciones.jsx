import React from 'react'
import styles from '../styles'
import {   Navbar,   Footer   , Billing , Hero_2    
         } from '../components'

const Soluciones = () => {
  return (
<div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero_2
          Title="Nuestra "
          Intro="Soluciones"
          Description="Los clientes quieren mejores formas de administrar su dinero.  Están buscando opciones y conveniencia, y todo esto significa cambio. Nuestra plataforma de banca en la nube ayuda a que se produzcan cambios financieros. Diferencie, colabore y dé nueva vida a los servicios." />
          
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
          <Billing />
        
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Soluciones