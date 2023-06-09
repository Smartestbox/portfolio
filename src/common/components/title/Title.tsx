import React from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    text: string
}

const Title: React.FC<TitlePropsType> = ({
                                             text
                                         }) => {
    return (
        <div className={style.title}>
            <h2>{text}</h2>
        </div>
    );
};

export default Title;