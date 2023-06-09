import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
}) => {
    return (
        <div className='notes-list'>
            <AddNote handleAddNote={handleAddNote} />
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    place={note.place}
                    date={note.date}
                    time={note.time}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}

        </div>
    );
};

export default NotesList;