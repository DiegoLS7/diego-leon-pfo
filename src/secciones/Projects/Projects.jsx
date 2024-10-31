import React from 'react';
import styles from './ProjectsStyles.module.css';
import receta from '../../assets/cereal_10.png';
import sitrash from '../../assets/sitrashlogo.jpg';
import library from '../../assets/library_55.png';
import bapmet from '../../assets/chatbapmet.png';
import air from '../../assets/air.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle' > 
            Projectos
        </h1>

        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={bapmet} 
            link="https://github.com/DiegoLS7/bapmet"
            h3="Chat-BapMet"
            desc="Chat Web Online"
            detalle="React, Typescript, Firestore y Tailwind"
            />

          <div style={{ textAlign: 'center', marginLeft: '-380px' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.8rem' }}>Mira mi último proyecto</h3>
            <button 
              style={{
                backgroundColor: 'red', // color rojo
                color: '#fff', // letras blancas
                padding: '27px 37px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => window.location.href = 'https://chat-bapmet.web.app/login'}
            >
              BapMet
            </button>
          </div>

        </div>

        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={receta} 
            link="https://github.com/DiegoLS7/RecetasHub"
            h3="Receta"
            desc="Mantenedor Web"
            detalle="PHP, JavaScript, HTML, CSS y MySql"
            />

            <ProjectCard src={sitrash} 
            link="https://github.com/DiegoLS7/Sitrash"
            h3="Sistema Sindicato"
            desc="Mantenedor Web"
            detalle="React, Node, JavaScript, HTML, CSS y MySql"
            />

            <ProjectCard src={library} 
            link="https://github.com/DiegoLS7/Biblioteca"
            h3="Proyecto Biblioteca"
            desc="Mantenedor Web"
            detalle="ASP.NET, C#, JavaScript, HTML, CSS y Microsoft Sql"
            />
            <ProjectCard src={air}  
            link="https://github.com/DiegoLS7/BuenosAires"
            h3="Buenos Aires"
            desc="Mantenedor Escritorio"
            detalle="Java, JDK8, javax.swing, APIRest y PostgreSql"
            />
        </div>
    </section>
  )
}

export default Projects;
