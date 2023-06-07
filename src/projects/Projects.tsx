import React from 'react';
import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/images/todolist.jpg'
import counterImage from './../assets/images/counter.jpg'

const Projects = () => {
    const todoStyle = {
        backgroundImage: `url(${todoImage})`

    }

    const counterStyle = {
        backgroundImage: `url(${counterImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        title={'Counter'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quam.'}
                        style={counterStyle}
                    />
                    <Project
                        title={'Todolist'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaq.'}
                        style={todoStyle}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;