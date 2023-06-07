import React from 'react';
import projectStyle from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

const Project: React.FC<ProjectPropsType> = ({
                                                 title,
                                                 description,
                                                 style
                                             }) => {
    return (
        <div className={projectStyle.project}>
            <div className={projectStyle.projectImgContainer} style={style}>
                <a className={projectStyle.projectBtn}>View</a>
            </div>
            <div className={projectStyle.projectInfo}>
                <h3 className={projectStyle.projectTitle}>{title}</h3>
                <span className={projectStyle.description}>{description}</span>
            </div>
        </div>
    );
};

export default Project;