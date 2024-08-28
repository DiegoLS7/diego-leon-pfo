import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id="Footer" className={styles.container} >
        <p> &copy; 2024 Diego León. <br /> 
            Todos los derechos reservados.
        </p>
    </section>
  )
}

export default Footer
