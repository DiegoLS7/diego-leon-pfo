
import Styles from './HeroStyles.module.css';
import heroImg from '../../assets/titulo.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.docx.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={Styles.container}>
        <div className={Styles.colorModeContainer}> 
            <img className={Styles.hero} src={heroImg} alt="Foto de Diego Leon" />
            <img className={Styles.colorMode} src={themeIcon} alt="Color de Icono" onClick={toggleTheme} />
        </div>

        <div className={Styles.info}>
            <h1>
                Diego
                <br />
                León
            </h1>
            <h2>
                Full Stack Developer
            </h2>
            <span>
                <a href="https://github.com/DiegoLS7" target='_blank'> 
                    <img src={githubIcon} alt="Github icon" />
                </a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/diego-leon-sandoval-7373a91ba/" target='_blank' >
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p className={Styles.description}>
                Con gran pasion por el desarrollo tradicional y moderno orientado a el software web para entregar soluciones inteligentes e innovadoras
            </p>

            <a href={CV}>
                <button className="btn hover" dowload>
                    Currículum
                </button>
            </a>

        </div>

    </section>
  )
}

export default Hero
