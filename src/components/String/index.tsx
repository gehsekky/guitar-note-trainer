'use client';

import { ReactNode } from 'react';
import styles from './styles.module.css';

type StringProps = {
    index: number;
    note: string;
    children: ReactNode | ReactNode[];
};

const String = ({ index, children }: StringProps) => {
    return (
        <tr className={`string string-${index} ${styles.string}`}>
            {children}
        </tr>
    );
};

export default String;
