import { Note } from '@/data/notesContext';
import { createContext, Dispatch, SetStateAction } from 'react';

export type AnswerContextType = {
    note: Note | undefined;
    answer: Note | undefined;
    randomString: number | undefined;
    randomFret: number | undefined;
    setNote: Dispatch<SetStateAction<Note | undefined>>;
    setAnswer: Dispatch<SetStateAction<Note | undefined>>;
    setRandomString: Dispatch<SetStateAction<number | undefined>>;
    setRandomFret: Dispatch<SetStateAction<number | undefined>>;
};

export const AnswerContext = createContext<AnswerContextType>({
    note: undefined,
    answer: undefined,
    randomString: undefined,
    randomFret: undefined,
    setNote: () => {},
    setAnswer: () => {},
    setRandomString: () => {},
    setRandomFret: () => {},
});
