'use client';

import { ReactNode } from 'react';
import styles from './styles.module.css';

type NoteProps = {
    children?: ReactNode | ReactNode[];
    hidden: boolean;
};

const Note = ({ hidden, children }: NoteProps) => {
    return (
        <div className={!hidden ? styles.note : styles.hidden}>{children}</div>
    );
};

export default Note;
