import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

const Project: React.FC<ProjectPropsType> = ({
                                                 title,
                                                 description,
                                             }) => {
    return (
        <div className={style.project}>
            <div className={style.projectImgContainer}>
                <a className={style.projectBtn}>View</a>
            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};

export default Project;