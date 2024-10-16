'use client';

import { AnswerContext } from '@/app/answerContext';
import { Note, notesContext } from '@/data/notesContext';
import { MouseEventHandler, useContext } from 'react';

import NoteInputButton from '../NoteInputButton';

import styles from './styles.module.css';

const Controls = () => {
    const { setAnswer } = useContext(AnswerContext);

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAnswer(e.currentTarget.value as Note);
    };

    return (
        <div className={styles.controlsContainer}>
            {notesContext.map((note, index) => (
                <div className={styles.controlContainer} key={index}>
                    <NoteInputButton note={note} onClick={onClick} />
                </div>
            ))}
        </div>
    );
};

export default Controls;
