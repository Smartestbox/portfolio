import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

const Skill: React.FC<SkillPropsType> = ({
                                             title,
                                             description,
                                         }) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
};

export default Skill;