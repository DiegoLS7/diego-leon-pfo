import React from 'react'
import styles from './SkillsStyles.module.css'
import SkillList from './SkillList';
import CheckMarkIcon from '../../assets/checkmark-dark.svg';

function Skills() {
  return (
    <section id="skills" className={styles.container} >
      <h1 className="sectionTitle" >Habilidades</h1>
      <div className={styles.skillList} >
        <SkillList src={CheckMarkIcon} skill="HTML" />
        <SkillList src={CheckMarkIcon} skill="CSS" />
        <SkillList src={CheckMarkIcon} skill="BootsTrap" />
      </div>
      <hr />
      <div className={styles.skillList} >
        <SkillList src={CheckMarkIcon} skill="React" />
        <SkillList src={CheckMarkIcon} skill="Angular" />
        <SkillList src={CheckMarkIcon} skill="Vite" />
        <SkillList src={CheckMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList} >
        <SkillList src={CheckMarkIcon} skill=".NET" />
        <SkillList src={CheckMarkIcon} skill="C#" />
        <SkillList src={CheckMarkIcon} skill="Java" />
        <SkillList src={CheckMarkIcon} skill="JavaScript" />
        <SkillList src={CheckMarkIcon} skill="Python" />
        <SkillList src={CheckMarkIcon} skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList} >
        <SkillList src={CheckMarkIcon} skill="Comunicativo" />
        <SkillList src={CheckMarkIcon} skill="Proactivo" />
        <SkillList src={CheckMarkIcon} skill="Positivo" />
        <SkillList src={CheckMarkIcon} skill="Autoaprendizaje " />
      </div>

    </section>
  );
}

export default Skills;
