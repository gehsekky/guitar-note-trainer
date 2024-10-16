import { AnswerContext } from '@/app/answerContext';
import { Note } from '@/data/notesContext';
import {
    MouseEventHandler,
    MouseEvent,
    useState,
    useEffect,
    useContext,
} from 'react';

type NoteInputButtonProps = {
    note: Note;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const NoteInputButton = ({ note, onClick }: NoteInputButtonProps) => {
    const { answer } = useContext(AnswerContext);
    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (answer === undefined) {
            setDisabled(false);
        }
    }, [answer]);

    const onClickHandler: MouseEventHandler<HTMLButtonElement> = (
        e: MouseEvent<HTMLButtonElement>
    ) => {
        setDisabled(true);
        onClick(e);
    };

    return (
        <button
            id={note}
            value={note}
            onClick={onClickHandler}
            disabled={disabled}
            className={`${!disabled ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700'} text-white font-bold py-2 px-4 rounded`}
        >
            {note}
        </button>
    );
};

export default NoteInputButton;
