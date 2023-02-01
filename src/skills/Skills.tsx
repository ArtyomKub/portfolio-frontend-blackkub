import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>MY EXPERIENCES</h2>
                <div className={style.skills}>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Skill title={'JavaScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
};
