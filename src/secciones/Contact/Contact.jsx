import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_nom939c', 'template_izk2n5e', form.current, {
          publicKey: 'uku0vYxcpshEbP_t6',
        })
        .then(
          () => {
            console.log('Envio Completado!!!');
          },
          (error) => {
            console.log('Error, intentalo de nuevo...', error.text);
          },
        );
    };

  return (
    <section id="contact" className={styles.container}>
      <div className='SectionTitle'>
         <h1 >Contacto</h1>
      </div>
        <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup" >
            <label htmlFor="nombre" hidden>
                Nombre
            </label>
            <input 
                type="text" 
                name="user_name"
                id="nombre"
                placeholder="Nombre"
                required
            />
        </div>
        
        <div className="formGroup" >
            <label htmlFor="email" hidden>
                Email
            </label>
            <input 
                type="text" 
                name="user_email"
                id="email"
                placeholder="Email"
                required
            />
        </div>
        <div className="formGroup" >
            <label htmlFor="mensaje" hidden>
                Mensaje
            </label>
            <textarea 
               type="text" 
               name="message"
               id="mensaje"
               placeholder='Mensaje'
               required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send" placeholder="Enviar" />
    </form>
    </section>
  );
}

export default Contact
