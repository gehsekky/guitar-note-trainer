'use client';

import { AnswerContext } from '@/app/answerContext';
import { NUM_FRETS, NUM_STRINGS } from '@/app/constants';
import { useContext, useEffect, useState } from 'react';

import styles from './styles.module.css';

const CORRECT_TEXT = 'correct!';
const INITIAL_TEXT = 'press note to guess answer';
const WRONG_TEXT = 'wrong answer. try again.';

const Evaluation = () => {
    const [evaluationText, setEvaluationText] = useState(INITIAL_TEXT);
    const { setRandomString, setRandomFret, note, answer, setAnswer } =
        useContext(AnswerContext);

    useEffect(() => {
        if (note && answer) {
            let text = WRONG_TEXT;
            if (note === answer) {
                text = CORRECT_TEXT;
            }

            setEvaluationText(text);

            if (text === CORRECT_TEXT) {
                setTimeout(() => {
                    setRandomString(Math.floor(Math.random() * NUM_STRINGS));
                    setRandomFret(Math.floor(Math.random() * NUM_FRETS));
                    setAnswer(undefined);
                    setEvaluationText(INITIAL_TEXT);
                }, 5000);
            }
        }
    }, [answer, note, setRandomFret, setRandomString, setAnswer]);

    return (
        <div className={styles.evaluationContainer}>
            <div className={styles.outputContainer}>{evaluationText}</div>
        </div>
    );
};

export default Evaluation;
