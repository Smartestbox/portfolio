import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'} />
                <div className={style.skills}>
                    <Skill
                        title={'HTML/CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vitae!'}
                    />
                    <Skill
                        title={'JS'}
                        description={'Lorem ipsum dolor sit amet, consectetur'}
                    />
                    <Skill
                        title={'REACT/REDUX'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicin. Autem, vitae!'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;

