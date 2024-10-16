'use client';

import { AnswerContext } from '@/app/answerContext';
import Controls from '../Controls';
import Evaluation from '../Evaluation';
import Guitar from '../Guitar';
import { useState } from 'react';
import { Note } from '@/data/notesContext';

const App = () => {
    const [note, setNote] = useState<Note | undefined>(undefined);
    const [answer, setAnswer] = useState<Note | undefined>(undefined);
    const [randomString, setRandomString] = useState<number | undefined>(
        undefined
    );
    const [randomFret, setRandomFret] = useState<number | undefined>(undefined);

    return (
        <>
            <AnswerContext.Provider
                value={{
                    note,
                    setNote,
                    answer,
                    setAnswer,
                    randomString,
                    setRandomString,
                    randomFret,
                    setRandomFret,
                }}
            >
                <Controls />
                <Guitar />
                <Evaluation />
            </AnswerContext.Provider>
        </>
    );
};

export default App;
