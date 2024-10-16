'use client';

import { AnswerContext } from '@/app/answerContext';
import { fretsContext } from '@/data/fretsContext';
import {
    getInitialNoteIndexForString,
    type Note as NoteType,
    notesContext,
} from '@/data/notesContext';
import { stringsContext } from '@/data/stringsContext';
import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react';
import Fret from '../Fret';
import FretCircle from '../FretCircle';
import Note from '../Note';
import String from '../String';

import styles from './styles.module.css';
import { NUM_FRETS, NUM_STRINGS } from '@/app/constants';

const generatePage = (
    randomString: number,
    randomFret: number,
    setNote: Dispatch<SetStateAction<NoteType | undefined>>
) => {
    return (
        <div className={styles.guitarContainer}>
            <table cellPadding={0} cellSpacing={0}>
                <tbody>
                    {stringsContext.map((stringContext, stringIdx) => {
                        let noteIndex = getInitialNoteIndexForString(stringIdx);
                        return (
                            <String
                                key={stringIdx}
                                index={stringContext.index}
                                note={stringContext.note}
                            >
                                {fretsContext.map((fretIndex) => {
                                    const currentNote = notesContext[noteIndex];

                                    noteIndex++;
                                    if (noteIndex > notesContext.length - 1) {
                                        noteIndex %= notesContext.length;
                                    }

                                    let isNote = false;
                                    if (
                                        fretIndex === randomFret &&
                                        stringIdx === randomString
                                    ) {
                                        isNote = true;
                                        setNote(currentNote);
                                    }

                                    return (
                                        <Fret
                                            key={fretIndex}
                                            index={fretIndex}
                                            showBorder={stringIdx !== 0}
                                            blackBorder={fretIndex === 0}
                                        >
                                            <Note hidden={!isNote}>
                                                <span className={styles.hidden}>
                                                    {currentNote}
                                                </span>
                                            </Note>
                                            {((stringIdx === 3 &&
                                                [
                                                    3, 5, 7, 9, 15, 17, 19, 21,
                                                ].includes(fretIndex)) ||
                                                ([2, 4].includes(stringIdx) &&
                                                    fretIndex === 12)) && (
                                                <FretCircle />
                                            )}
                                            {stringIdx === 0 && fretIndex}
                                        </Fret>
                                    );
                                })}
                            </String>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const Guitar = () => {
    const {
        setNote,
        randomString,
        randomFret,
        setRandomString,
        setRandomFret,
    } = useContext(AnswerContext);
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        setRandomString(Math.floor(Math.random() * NUM_STRINGS));
        setRandomFret(Math.floor(Math.random() * NUM_FRETS));
    }, []);

    useEffect(() => {
        if (randomString === undefined || randomFret === undefined) {
            return;
        }

        setContent(generatePage(randomString, randomFret, setNote));
    }, [randomString, randomFret]);

    return content;
};

export default Guitar;
