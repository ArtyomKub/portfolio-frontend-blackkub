import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>MY EXPERIENCES</h2>
                <div className={style.skills}>

                </div>
            </div>
        </div>
    );
};
