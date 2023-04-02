import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project
                        title={'Counter'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quam.'}
                    />
                    <Project
                        title={'Todolist'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaq.'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;