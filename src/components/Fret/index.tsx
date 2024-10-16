'use client';

import { ReactNode } from 'react';
import styles from './styles.module.css';

type FretProps = {
    index: number;
    showBorder: boolean;
    blackBorder: boolean;
    children: ReactNode | ReactNode[];
};

const Fret = ({ index, showBorder, blackBorder, children }: FretProps) => {
    return (
        <td className={styles.fret}>
            <div
                className={`fret fret-${index} ${styles.cell} ${showBorder ? (blackBorder ? styles.blackBorder : '') : styles.noborder}`}
            >
                {children}
            </div>
        </td>
    );
};

export default Fret;
