export type Note =
    | 'A'
    | 'A#'
    | 'B'
    | 'C'
    | 'C#'
    | 'D'
    | 'D#'
    | 'E'
    | 'F'
    | 'F#'
    | 'G'
    | 'G#';

export const notesContext: Note[] = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
];

export const getInitialNoteIndexForString = (stringIdx: number) => {
    switch (stringIdx) {
        case 5:
            return notesContext.indexOf('E');
        case 4:
            return notesContext.indexOf('A');
        case 3:
            return notesContext.indexOf('D');
        case 2:
            return notesContext.indexOf('G');
        case 1:
            return notesContext.indexOf('B');
        case 0:
            return notesContext.indexOf('E');
        default:
            throw new Error(`invalid stringIdx (${stringIdx})`);
    }
};
