import React from 'react'
import styles from '../styles'
import {   Navbar,   Footer , Clients ,Hero_2
         } from '../components'
const Clientes = () => {
  return (
<div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero_2
          Title="Nuestros "
          Intro="Clientes"
          Description="Los clientes quieren mejores formas de administrar su dinero.  Están buscando opciones y conveniencia, y todo esto significa cambio. Nuestra plataforma de banca en la nube ayuda a que se produzcan cambios financieros. Diferencie, colabore y dé nueva vida a los servicios." />
          
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      
          <Clients />
         
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Clientes